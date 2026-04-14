import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, unit, moveDate, occupants, employed, income, hear, pets, smoking, message } = body;

    if (!firstName || !lastName || !email || !phone || !unit || !moveDate || !occupants || !employed) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // ── Email to MGI inbox ──
    await transporter.sendMail({
      from: `"33 First Street Leasing" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `🏠 New Rental Inquiry — ${unit} · ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;background:#f9f9f9;border:1px solid #e0e0e0;">
          <div style="background:#0D1B2E;padding:28px 32px;">
            <h1 style="color:#E2E2E2;margin:0;font-size:22px;font-weight:600;">New Rental Inquiry</h1>
            <p style="color:#9A9A9A;margin:6px 0 0;font-size:13px;">33 First Street East · Cornwall, Ontario</p>
          </div>
          <div style="padding:32px;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr style="background:#1B4F9B;"><td colspan="2" style="padding:10px 16px;color:white;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">Applicant Information</td></tr>
              <tr style="background:#fff;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;width:38%;font-weight:bold;">Full Name</td><td style="padding:11px 16px;font-size:13px;color:#222;">${firstName} ${lastName}</td></tr>
              <tr style="background:#f9f9f9;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;font-weight:bold;">Email</td><td style="padding:11px 16px;font-size:13px;"><a href="mailto:${email}" style="color:#1B4F9B;">${email}</a></td></tr>
              <tr style="background:#fff;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;font-weight:bold;">Phone</td><td style="padding:11px 16px;font-size:13px;"><a href="tel:${phone}" style="color:#1B4F9B;">${phone}</a></td></tr>
            </table>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr style="background:#1B4F9B;"><td colspan="2" style="padding:10px 16px;color:white;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">Unit & Move-In Details</td></tr>
              <tr style="background:#fff;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;width:38%;font-weight:bold;">Preferred Unit</td><td style="padding:11px 16px;font-size:13px;color:#222;font-weight:bold;">${unit}</td></tr>
              <tr style="background:#f9f9f9;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;font-weight:bold;">Desired Move-In</td><td style="padding:11px 16px;font-size:13px;color:#222;">${moveDate}</td></tr>
              <tr style="background:#fff;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;font-weight:bold;">Occupants</td><td style="padding:11px 16px;font-size:13px;color:#222;">${occupants}</td></tr>
            </table>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr style="background:#1B4F9B;"><td colspan="2" style="padding:10px 16px;color:white;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">Financial & Lifestyle</td></tr>
              <tr style="background:#fff;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;width:38%;font-weight:bold;">Employment</td><td style="padding:11px 16px;font-size:13px;color:#222;">${employed}</td></tr>
              <tr style="background:#f9f9f9;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;font-weight:bold;">Monthly Income</td><td style="padding:11px 16px;font-size:13px;color:#222;">${income || "Not provided"}</td></tr>
              <tr style="background:#fff;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;font-weight:bold;">Pets</td><td style="padding:11px 16px;font-size:13px;color:#222;">${pets}</td></tr>
              <tr style="background:#f9f9f9;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;font-weight:bold;">Smoker</td><td style="padding:11px 16px;font-size:13px;color:#222;">${smoking}</td></tr>
              <tr style="background:#fff;border-bottom:1px solid #eee;"><td style="padding:11px 16px;font-size:13px;color:#555;font-weight:bold;">How They Found Us</td><td style="padding:11px 16px;font-size:13px;color:#222;">${hear || "Not provided"}</td></tr>
            </table>
            ${message ? `
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr style="background:#1B4F9B;"><td style="padding:10px 16px;color:white;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">Additional Notes</td></tr>
              <tr style="background:#fff;"><td style="padding:16px;font-size:13px;color:#444;line-height:1.6;">${message}</td></tr>
            </table>` : ""}
            <div style="background:#0D1B2E;padding:18px 24px;margin-top:8px;">
              <p style="margin:0;color:#9A9A9A;font-size:12px;">Reply to this email to respond directly to <strong style="color:#C8C8C8;">${firstName} ${lastName}</strong> at <a href="mailto:${email}" style="color:#3B7DD8;">${email}</a></p>
              <p style="margin:6px 0 0;color:#9A9A9A;font-size:11px;">Submitted via 33 First Street website · Managed by Meadowlands Group Inc.</p>
            </div>
          </div>
        </div>
      `,
    });

    // ── Auto-reply to applicant ──
    await transporter.sendMail({
      from: `"33 First Street Leasing" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `We received your inquiry — 33 First Street, Cornwall`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:580px;margin:0 auto;background:#f9f9f9;border:1px solid #e0e0e0;">
          <div style="background:#0D1B2E;padding:28px 32px;">
            <h1 style="color:#E2E2E2;margin:0;font-size:20px;font-weight:600;">Thank you, ${firstName}.</h1>
            <p style="color:#9A9A9A;margin:6px 0 0;font-size:13px;">33 First Street East · Cornwall, Ontario</p>
          </div>
          <div style="padding:32px;">
            <p style="color:#333;font-size:14px;line-height:1.7;margin:0 0 20px;">We have received your rental inquiry for <strong>${unit}</strong> and will follow up within <strong>1–2 business days</strong> to discuss next steps and arrange a viewing.</p>
            <div style="background:#fff;border:1px solid #e0e0e0;padding:20px 24px;margin-bottom:24px;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:bold;color:#1B4F9B;letter-spacing:1px;text-transform:uppercase;">Your Inquiry Summary</p>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:7px 0;font-size:13px;color:#666;width:45%;">Unit Requested</td><td style="padding:7px 0;font-size:13px;color:#222;font-weight:bold;">${unit}</td></tr>
                <tr><td style="padding:7px 0;font-size:13px;color:#666;">Desired Move-In</td><td style="padding:7px 0;font-size:13px;color:#222;">${moveDate}</td></tr>
                <tr><td style="padding:7px 0;font-size:13px;color:#666;">Occupants</td><td style="padding:7px 0;font-size:13px;color:#222;">${occupants}</td></tr>
              </table>
            </div>
            <p style="color:#555;font-size:13px;margin:0 0 5px;">Need to reach us sooner?</p>
            <p style="margin:0 0 24px;"><a href="tel:+19059951234" style="color:#1B4F9B;font-size:14px;font-weight:bold;text-decoration:none;">(905) 995-1234</a></p>
            <div style="border-top:1px solid #eee;padding-top:20px;">
              <p style="color:#999;font-size:11px;margin:0;">33 First Street East, Cornwall ON · Managed by Meadowlands Group Inc.</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send. Please call us directly at (905) 995-1234." }, { status: 500 });
  }
}
