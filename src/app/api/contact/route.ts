import { NextResponse } from "next/server";

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

    // Send email
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
          from: "DevisPro <contact@devispro.fr>",
          to: notificationEmail,
          subject: `Contact : ${sujet}`,
          html: `
            <h2>Nouveau message de contact</h2>
            <p><strong>Nom :</strong> ${nom}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Sujet :</strong> ${sujet}</p>
            <p><strong>Message :</strong></p>
            <p>${message}</p>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}
