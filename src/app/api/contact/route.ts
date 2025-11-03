import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, origin, topic, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Data belum lengkap." },
        { status: 400 }
      );
    }

    const schoolEmail = process.env.SCHOOL_EMAIL!;

    await resend.emails.send({
      from: `Form Kontak SMK M3 Dolopo <onboarding@resend.dev>`,
      to: [schoolEmail],
      replyTo: email,
      subject: `[KONTAK WEB] ${subject}`,
      html: `
        <h2>Pesan Baru dari Formulir Kontak Sekolah</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asal/Instansi:</strong> ${origin}</p>
        <p><strong>Topik:</strong> ${topic}</p>
        <hr />
        <p><strong>Pesan:</strong></p>
        <p>${message}</p>
      `,
    });
    console.log("Email terkirim ke sekolah.", { name, email, subject });
    return NextResponse.json({
      success: true,
      message: "Pesan berhasil dikirim. Kami akan segera membalas.",
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Gagal mengirim email." },
      { status: 500 }
    );
  }
}
