import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { getServiceBySlug } from "@/lib/services";

const DESTINATION_EMAIL = "contact@renov-habitation.fr";

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

    // Send notification email
    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
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
            subject: `[Nouveau devis] ${serviceData.name} — ${code_postal}`,
            html: `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
                <div style="background: linear-gradient(135deg, #1e1b4b, #312e81); padding: 32px 24px; border-radius: 12px 12px 0 0;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Nouvelle demande de devis</h1>
                  <p style="color: #c7d2fe; margin: 8px 0 0; font-size: 14px;">${serviceData.name} — Code postal ${code_postal}</p>
                </div>
                <div style="padding: 32px 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; width: 130px;">Service</td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${serviceData.name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Client</td>
                      <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${nom}</td>
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
                  </table>
                  <div style="margin-top: 24px; padding: 20px; background: #f9fafb; border-radius: 8px; border: 1px solid #f3f4f6;">
                    <p style="color: #6b7280; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Description du besoin</p>
                    <p style="color: #111827; font-size: 14px; margin: 0; line-height: 1.6; white-space: pre-wrap;">${description}</p>
                  </div>
                  <p style="color: #9ca3af; font-size: 12px; margin: 24px 0 0; text-align: center;">Renov Habitation — renov-habitation.fr</p>
                </div>
              </div>
            `,
          }),
        });

        if (!emailRes.ok) {
          const errorData = await emailRes.json().catch(() => ({}));
          console.error("Resend API error:", emailRes.status, errorData);
          // Lead is saved, email notification failed - still return success
        }
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Lead is saved, email notification failed - still return success
      }
    } else {
      console.warn("RESEND_API_KEY not configured - notification email not sent");
    }

    return NextResponse.json({ success: true, lead: data });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
