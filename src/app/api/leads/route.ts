import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getServiceBySlug } from "@/lib/services";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { service, description, code_postal, telephone, email, nom } = body;

    // Validation
    if (!service || !description || !code_postal || !telephone || !email || !nom) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    if (!/^\d{5}$/.test(code_postal)) {
      return NextResponse.json(
        { error: "Code postal invalide" },
        { status: 400 }
      );
    }

    if (!/^0[1-9]\d{8}$/.test(telephone.replace(/\s/g, ""))) {
      return NextResponse.json(
        { error: "Numero de telephone invalide" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      );
    }

    const serviceData = getServiceBySlug(service);
    if (!serviceData) {
      return NextResponse.json(
        { error: "Service invalide" },
        { status: 400 }
      );
    }

    // Store in Supabase
    const { data, error } = await supabase
      .from("leads")
      .insert({
        service,
        service_name: serviceData.name,
        description,
        code_postal,
        telephone: telephone.replace(/\s/g, ""),
        email,
        nom,
        status: "nouveau",
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'enregistrement" },
        { status: 500 }
      );
    }

    // Send notification email (best effort)
    try {
      const resendApiKey = process.env.RESEND_API_KEY;
      const notificationEmail = process.env.NOTIFICATION_EMAIL;

      if (resendApiKey && notificationEmail) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "DevisPro <notifications@devispro.fr>",
            to: notificationEmail,
            subject: `Nouveau lead : ${serviceData.name} - ${code_postal}`,
            html: `
              <h2>Nouvelle demande de devis</h2>
              <p><strong>Service :</strong> ${serviceData.name}</p>
              <p><strong>Client :</strong> ${nom}</p>
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Telephone :</strong> ${telephone}</p>
              <p><strong>Code postal :</strong> ${code_postal}</p>
              <p><strong>Description :</strong></p>
              <p>${description}</p>
              <hr />
              <p><a href="${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/dashboard">Voir dans le dashboard</a></p>
            `,
          }),
        });
      }
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
    }

    return NextResponse.json({ success: true, lead: data });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Erreur lors de la recuperation" },
        { status: 500 }
      );
    }

    return NextResponse.json({ leads: data });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
