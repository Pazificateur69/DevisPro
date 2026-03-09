import { NextResponse } from "next/server";

const DESTINATION_EMAIL = "contact@renov-habitation.fr";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, sujet, message } = body;

    if (!nom || !email || !sujet || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

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
          subject: `[Contact] ${sujet}`,
          html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
              <div style="background: linear-gradient(135deg, #1e1b4b, #312e81); padding: 32px 24px; border-radius: 12px 12px 0 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700;">Nouveau message de contact</h1>
                <p style="color: #c7d2fe; margin: 8px 0 0; font-size: 14px;">Recu via le formulaire de contact</p>
              </div>
              <div style="padding: 32px 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; width: 120px;">Nom</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${nom}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Email</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Sujet</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 600;">${sujet}</td>
                  </tr>
                </table>
                <div style="margin-top: 24px; padding: 20px; background: #f9fafb; border-radius: 8px; border: 1px solid #f3f4f6;">
                  <p style="color: #6b7280; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Message</p>
                  <p style="color: #111827; font-size: 14px; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
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
      }
    } else {
      console.warn("RESEND_API_KEY not configured - email not sent");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
