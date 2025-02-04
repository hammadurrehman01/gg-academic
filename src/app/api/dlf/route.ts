import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.formData(); // Parse form data

    const transporter = nodemailer.createTransport({
      host: "mail.eduresearchers.com",
      port: 587, // Use the appropriate port for your SMTP server
      secure: false, // Set to true if your server requires a secure connection
      auth: {
        // port:
        user: "support@eduresearchers.com",
        pass: "Support@123123",
      },
    });

    const mailOptions: any = {
      from: "support@eduresearchers.com",
      to: `support@eduresearchers.com`,
      subject: `DLF FORM`,
      html: `
      <p style="font-weight: bold; font-size: 20px">DLF Details</p>

      <hr />
    
      <b>User Name: </b> ${body.get("Name")} <br />
      <b>User phone number: </b> ${body.get("phone_code")} ${body.get(
        "Phone"
      )} <br />
      <b>Email: </b> ${body.get("Email")} <br />
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email send error:", error);
        // res.status(500).json({ error: "Email send error" });
      } else {
        console.log("Email sent: " + info.response);
        // res.status(200).json({ message: "Email sent successfully" });
      }
    });
    return NextResponse.json(
      {
        message: "Email sent successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
