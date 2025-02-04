import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.formData(); // Parse form data

    /////////////// check for access token////////////

    const access_token = body.get("access_token");

    // Validate access_token
    const access_token_created = "AAH-DLF_Form";
    if (access_token !== access_token_created) {
      console.log("Inside error of token");
      return NextResponse.json(
        { message: `Invalid Access Token` },
        { status: 400 }
      );
    }
    /////////////// end check for access token////////////

    const transporter = nodemailer.createTransport({
      host: "s3479.syd1.stableserver.net",
      port: 587, // Use the appropriate port for your SMTP server
      secure: false, // Set to true if your server requires a secure connection
      auth: {
        // port:
        user: "support@gogrades.org",
        pass: "mastermindsASS!@2",
      },
    });

    const mailOptions: any = {
      from: "New Contact Form | Gogrades.org <support@gogrades.org>",
      to: `support@gogrades.org`,
      subject: `Contact FORM`,
      html: `
      <p style="font-weight: bold; font-size: 20px">DLF Details</p>

      <hr />
    
      <b>User Name: </b> ${body.get("Name")} <br />
      <b>User phone number: </b> ${body.get("phone_code")} ${body.get(
        "Phone"
      )} <br />
      <b>Email: </b> ${body.get("Email")} <br />
      <b>Message: </b> ${body.get("Description")} <br />
      <b>Location Details: </b> ${body.get("locationDetails")} <br />
    `,
    };

    const sendEmail = async (mailOptions: any) => {
      return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Email send error:", error);
            reject(error);
          } else {
            console.log("Email sent successfully:", info.response);
            resolve(info);
          }
        });
      });
    };

    try {
      const info = await sendEmail(mailOptions);
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 201 }
      );
    } catch (error) {
      console.error("Email send error:", error);
      return NextResponse.json(
        { message: "Email send error" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
