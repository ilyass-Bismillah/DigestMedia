import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, company, service, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: "Digest Media <onboarding@resend.dev>", 
      to: "ilyassbis@gmail.com", 
      subject: `New Lead: ${name} - ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 12px;">
          <h2 style="color: #E72D87; margin-bottom: 20px;">New Contact Submission</h2>
          <hr style="border: 0; border-top: 1px solid #eee; margin-bottom: 20px;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Service Requested:</strong> <span style="background: #fff0f6; color: #E72D87; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${service}</span></p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px;">
            <strong>Message:</strong><br/>
            <p style="white-space: pre-wrap; color: #444;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}