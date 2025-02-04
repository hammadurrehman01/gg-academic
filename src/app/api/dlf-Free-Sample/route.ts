import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";
export async function POST(req: NextRequest) {
  try {
    const body = await req.formData(); // Parse form data

    /////////////// Validate access_token ////////////

    const access_token = body.get("access_token");
    const access_token_created = "AAH-DLF_Form";
    if (access_token !== access_token_created) {
      return NextResponse.json(
        { message: `Invalid Access Token` },
        { status: 402 }
      );
    }

    /////////////// end Validate access_token ////////////

    const transporter = nodemailer.createTransport({
      host: "s3479.syd1.stableserver.net",
      port: 587,
      secure: false,
      auth: {
        // port:
        user: "support@gogrades.org",
        pass: "mastermindsASS!@2",
      },
    });

    const mailOptions: any = {
      from: "New Sample Form | Gogrades.org <support@gogrades.org>",
      to: `support@gogrades.org`,
      subject: `New Sample FORM Entry | Gogrades.org`,
      html: `
      <p style="font-weight: bold; font-size: 20px">Sample Form Details</p>

      <hr />
    
      <b>User Name: </b> ${body.get("Name")} <br />
      <b>User phone number: </b> ${body.get("phone_code")} ${body.get(
        "Phone"
      )} <br />
      <b>Email: </b> ${body.get("Email")} <br />
      <b>Subject: </b> ${body.get("Subject")} <br />
      <b>Country: </b> ${body.get("Country")} <br />
      <hr />
      <b>Current URL: </b> ${body.get("currentURL")} <br />
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

    ////////////////////////// Sent to client

    const transporterClient = nodemailer.createTransport({
      host: "s3479.syd1.stableserver.net",

      port: 587, // Use the appropriate port for your SMTP server
      secure: false, // Set to true if your server requires a secure connection
      auth: {
        user: "support@gogrades.org",
        pass: "mastermindsASS!@2",
      },
    });

    const mailOptionsClient = {
      from: "GoGrades® Alert <support@gogrades.org>",
      to: `${body.get("Email")}`,
      subject: `Thank You For Choosing Gogrades.org`,
      html: `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GoGrades Discount</title>
      </head>
      <body
        style="
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background: url(https://gogrades.org/web-assets/order-img.webp);
          background-size: cover; /* Adjusts the image to cover the entire background */
          height: 100%;
          width: 100%;
        "
      >
        <div style="width: 100%; padding: 50px 0">
          <table
            style="
              max-width: 500px;
              margin: 0 auto;
              background-color: #f4f4f4;
              border-radius: 10px;
              border: 2px solid #0000001a; /* Fallback for box shadow */
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              width: 100%;
            "
            cellpadding="0"
            cellspacing="0"
          >
            <tr>
              <!-- Header -->
              <td
                style="
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
                  background-color: #091540;
                  padding: 20px;
                  text-align: center;
                "
              >
                <img
                  src="https://res.cloudinary.com/darpb8kox/image/upload/v1727269997/logo-web_gaakgx.png"
                  alt="Gogrades.org Logo"
                  style="height: 50px"
                />
              </td>
            </tr>
            <tr>
              <!-- Content -->
              <td style="padding: 20px">
                <div style="text-align: center; margin-top: 20px">
                  <img
                    src="https://gogrades.org/web-assets/gift.png"
                    alt="Discount"
                    style="height: 45px"
                  />
                  <p style="font-size: 20px; color: #333333; margin-top: 10px">
                    HURRY UP!
                  </p>
                </div>
    
                <p
                  style="
                    font-size: 18px;
                    color: #666666;
                    text-align: center;
                    max-width: 400px;
                    margin-left: auto;
                    margin-right: auto;
                  "
                >
                  When Life Gives You Lemons - Make Lemonade! <br />
                  When Gogrades.org Gives You A Discount - <br /> Make An Order!
                </p>
                <p
                  style="
                    margin-top: 50px;
                    display: block;
                    font-size: 18px;
                    color: #666666;
                    text-align: center;
                  "
                >
                  Use this Discount Code To Get Started:
                </p>
    
                <!-- Discount Code -->
                <p
                  style="
                    font-size: 20px;
                    font-weight: bold;
                    text-align: center;
                    color: #091540;
                    text-decoration: underline;
                  "
                >
                  <a
                    href="https://gogrades.org/order?coupon=GG-50%off
    "
                  >
                    <img
                      src="https://gogrades.org/web-assets/Promocode.png"
                      style="height: 150px"
                    />
                  </a>
                </p>
                <!-- Button -->
                <div style="text-align: center">
                  <a
                    href="https://gogrades.org/order?coupon=GG-50%off
    "
                    style="
                      background-color: #091540;
                      color: #ffffff;
                      padding: 15px 30px;
                      text-decoration: none;
                      border-radius: 4px;
                      font-size: 16px;
                      font-weight: bold;
                      display: inline-block;
                    "
                    >Order Now</a
                  >
                </div>
              </td>
            </tr>
            <tr>
              <!-- Support Section -->
              <td style="padding: 20px; text-align: center">
                <div
                  style="
                    border: 1px dashed #cccccc; /* Light dashed border */
                    border-radius: 5px; /* Slight rounding for aesthetics */
                    padding: 15px; /* Inner padding */
                  "
                >
                  <p style="font-size: 16px; color: #666666; margin-bottom: 15px">
                    You Can Contact Our Support Team 24/7.
                  </p>
                  <a
                    href="https://wa.me/+447593709971?text=Hi, I Need Academic Help Instantly. Could You Please Assist Me In Submitting My Assignment Before The Deadline?"
                    style="
                      display: inline-flex;
                      align-items: center;
                      padding: 10px 20px;
                      margin-bottom: 20px;
                      background-color: #25d366;
                      border: none;
                      border-radius: 5px;
                      text-decoration: none;
                      color: white;
                      font-size: 16px;
                      font-weight: bold;
                      cursor: pointer;
                    "
                  >
                    <img
                      src="https://gogrades.org/web-assets/whatsapp.png"
                      alt="WhatsApp Icon"
                      style="height: 30px; margin-right: 10px"
                    />
                    <p style="margin: 0">WhatsApp Now</p>
                  </a>
                </div>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td
                style="
                  background-color: #091540;
                  padding: 20px;
                  text-align: center;
                  font-size: 12px;
                  color: whitesmoke;
                "
              >
                © 2025 Gogrades.org. All rights reserved
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
    
    
      `,
    };

    transporterClient.sendMail(
      mailOptionsClient,
      (error: any, info: { response: any }) => {
        if (error) {
          console.error("Error sending email:", error);
        } else {
          console.log("Email sent: %s", info.response);
        }
      }
    );

    try {
      const info = await sendEmail(mailOptions);
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
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
