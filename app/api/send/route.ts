import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    const data = await resend.emails.send({
      from: 'votre-email@votredomaine.com',
      to: 'destination@votredomaine.com',
      subject: `Nouveau message: ${subject}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>De:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Sujet:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}