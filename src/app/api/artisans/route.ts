import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      nom,
      entreprise,
      email,
      telephone,
      metier,
      code_postal,
      rayon_intervention,
      siret,
    } = body;

    // Validation
    if (!nom || !entreprise || !email || !telephone || !metier || !code_postal || !siret) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    if (!/^\d{14}$/.test(siret.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Numero SIRET invalide (14 chiffres)" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("artisans")
      .insert({
        nom,
        entreprise,
        email,
        telephone: telephone.replace(/\s/g, ""),
        metier,
        code_postal,
        rayon_intervention: rayon_intervention || 30,
        siret: siret.replace(/\s/g, ""),
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Un artisan avec cet email ou SIRET existe deja" },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Erreur lors de l'enregistrement" },
        { status: 500 }
      );
    }

    // Send notification
    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      const notificationEmail = process.env.NOTIFICATION_EMAIL || "contact@renov-habitation.fr";

      if (resendApiKey && notificationEmail) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Renov Habitation <notifications@renov-habitation.fr>",
            to: notificationEmail,
            subject: `Nouvel artisan inscrit : ${entreprise}`,
            html: `
              <h2>Nouvel artisan partenaire</h2>
              <p><strong>Nom :</strong> ${nom}</p>
              <p><strong>Entreprise :</strong> ${entreprise}</p>
              <p><strong>Metier :</strong> ${metier}</p>
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Telephone :</strong> ${telephone}</p>
              <p><strong>Code postal :</strong> ${code_postal}</p>
              <p><strong>SIRET :</strong> ${siret}</p>
            `,
          }),
        });
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json({ success: true, artisan: data });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
