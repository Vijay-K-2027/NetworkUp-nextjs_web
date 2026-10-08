import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, workEmail, company, inquiryType, message } = body;

    // 1. Validate required fields
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }

    if (
      !workEmail ||
      typeof workEmail !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail.trim())
    ) {
      return NextResponse.json(
        { error: "A valid work email is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Message content is required." },
        { status: 400 }
      );
    }

    // 2. Setup SMTP Transporter
    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE !== "false"; // true for 465, false for 587
    const user = process.env.SMTP_USER || "support@networkup.io";
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || "support@networkup.io";

    if (!pass) {
      console.error("Missing SMTP_PASS in environment variables.");
      return NextResponse.json(
        {
          error: "Email server configuration is incomplete (SMTP_PASS missing). Please configure your .env.local file.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const selectedInquiry = inquiryType || "Sales Inquiry";
    const trimmedCompany = company?.trim() || "Not specified";
    const submissionTime = new Date().toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "UTC",
    });

    // 3. Send notification email to support@networkup.io
    await transporter.sendMail({
      from: `"NetworkUp Form" <${user}>`,
      to: toEmail,
      replyTo: workEmail.trim(), // Key: clicking reply in email client responds to the user!
      subject: `[Inquiry: ${selectedInquiry}] ${fullName.trim()} (${trimmedCompany})`,
      text: `
New Contact Form Submission on NetworkUp.io

Name: ${fullName.trim()}
Email: ${workEmail.trim()}
Company: ${trimmedCompany}
Inquiry Type: ${selectedInquiry}
Date (UTC): ${submissionTime}

Message:
${message.trim()}
            `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #081f04; padding: 24px 32px; color: #ffffff; }
    .header h2 { margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; }
    .header p { margin: 6px 0 0 0; font-size: 13px; color: #acf847; }
    .body { padding: 32px; }
    .field-group { margin-bottom: 20px; }
    .field-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; }
    .field-value { font-size: 15px; font-weight: 600; color: #0f172a; }
    .field-badge { display: inline-block; padding: 4px 12px; background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; font-size: 13px; font-weight: 700; border-radius: 9999px; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; word-break: break-word; }
    .footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 32px; font-size: 12px; color: #94a3b8; text-align: center; }
    .reply-btn { display: inline-block; background: #16a34a; color: #ffffff !important; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>📬 New Inquiry Received</h2>
      <p>NetworkUp.io Contact Form</p>
    </div>
    <div class="body">
      <div style="display: flex; gap: 16px; margin-bottom: 20px;">
        <div class="field-group" style="flex: 1;">
          <div class="field-label">Sender Name</div>
          <div class="field-value">${fullName.trim()}</div>
        </div>
        <div class="field-group" style="flex: 1;">
          <div class="field-label">Work Email</div>
          <div class="field-value"><a href="mailto:${workEmail.trim()}" style="color: #2563eb; text-decoration: none;">${workEmail.trim()}</a></div>
        </div>
      </div>

      <div style="display: flex; gap: 16px; margin-bottom: 20px;">
        <div class="field-group" style="flex: 1;">
          <div class="field-label">Company</div>
          <div class="field-value">${trimmedCompany}</div>
        </div>
        <div class="field-group" style="flex: 1;">
          <div class="field-label">Inquiry Type</div>
          <div class="field-badge">${selectedInquiry}</div>
        </div>
      </div>

      <div class="field-group">
        <div class="field-label">Message</div>
        <div class="message-box">${message.trim()}</div>
      </div>

      <div style="text-align: center;">
        <a href="mailto:${workEmail.trim()}?subject=Re:%20${encodeURIComponent(selectedInquiry)}%20-%20NetworkUp" class="reply-btn">
          Reply to ${fullName.trim()} (${workEmail.trim()})
        </a>
      </div>
    </div>
    <div class="footer">
      Received on ${submissionTime} UTC &bull; You can reply directly to this email to contact the user.
    </div>
  </div>
</body>
</html>
            `.trim(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "An unexpected error occurred while sending your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
