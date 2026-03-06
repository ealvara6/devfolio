import { Resend } from 'resend';
export default async function handler(req: any, res: any) {
  try {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_TO_EMAIL as string,
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}\n\n${message}>`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send ' });
  }
}
