import { NextResponse } from "next/server";
import { profile } from "@/data/profile";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // Spam honeypot trap
    if (honeypot) {
      return NextResponse.json({ error: "Spam detected." }, { status: 400 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // If Resend or Web3Forms API key is configured in env:
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const resendKey = process.env.RESEND_API_KEY;

    if (web3formsKey) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          subject: subject || `Portfolio Inquiry from ${name}`,
          message,
          to: profile.email,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to deliver email through gateway.");
      }

      return NextResponse.json({
        success: true,
        method: "api",
        message: "Message delivered directly to inbox.",
      });
    }

    // Default response returning mail client URLs and payload
    const mailtoSubject = encodeURIComponent(subject || `Inquiry from ${name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      profile.email
    )}&su=${mailtoSubject}&body=${mailtoBody}`;

    const mailtoUrl = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    return NextResponse.json({
      success: true,
      method: "client_dispatch",
      payload: {
        gmailUrl,
        mailtoUrl,
        formattedText: `To: ${profile.email}\nSubject: ${subject || `Inquiry from ${name}`}\nFrom: ${name} (${email})\n\n${message}`,
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
