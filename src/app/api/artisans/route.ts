import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const DESTINATION_EMAIL = "contact@renov-habitation.fr";

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

      if (resendApiKey) {
        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Renov Habitation <contact@renov-habitation.fr>",
            to: DESTINATION_EMAIL,
            reply_to: email,
            subject: `[Nouvel artisan] ${entreprise} — ${metier}`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
                <div style="background: linear-gradient(135deg, #065f46, #047857); padding: 32px 24px; border-radius: 12px 12px 0 0;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Nouvel artisan partenaire</h1>
                  <p style="color: #a7f3d0; margin: 8px 0 0; font-size: 14px;">${entreprise} — ${metier}</p>
                </div>
                <div style="padding: 32px 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; width: 130px;">Nom</td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${nom}</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Entreprise</td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${entreprise}</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Metier</td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${metier}</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Email</td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Telephone</td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;"><a href="tel:${telephone}" style="color: #4f46e5;">${telephone}</a></td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Code postal</td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${code_postal}</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Rayon</td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${rayon_intervention || 30} km</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; color: #6b7280; font-size: 14px;">SIRET</td>
                      <td style="padding: 12px 0; color: #111827; font-size: 14px; font-weight: 600;">${siret}</td>
                    </tr>
                  </table>
                  <p style="color: #9ca3af; font-size: 12px; margin: 24px 0 0; text-align: center;">Renov Habitation — renov-habitation.fr</p>
                </div>
              </div>
            `,
          }),
        });

        if (!emailRes.ok) {
          const errorData = await emailRes.json().catch(() => ({}));
          console.error("Resend API error:", emailRes.status, errorData);
        }
      } else {
        console.warn("RESEND_API_KEY not configured - email not sent");
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
