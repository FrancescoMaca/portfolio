import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_TOKEN);

function isValidEmail(email: string) {
  const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

  return regex.test(email);
}

export async function POST(request: Request) {
  try {
    const { email, title, message } = await request.json();
    
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "The entered email address is not valid" },
        { status: 400 }
      );
    }

    const emailData = await resend.emails.send({
      from: "Contact Form <contact@frankymaca.me>",
      to: process.env.RESEND_RECEIVER!,
      replyTo: email,
      subject: `${title ? `Portfolio: ${title}` : 'New Portfolio Message'}`,
      html: `
        <h2>${title ? title : 'New Contact Form Submission'}</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully", id: emailData.data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error sending message" },
      { status: 500 }
    );
  }
}