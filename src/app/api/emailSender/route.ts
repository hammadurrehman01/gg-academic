import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path, { join } from "path";
import { promises as fsPromises } from "fs";
import fs from "fs";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // save data in json
    const body = await req.formData();

    /////////////// check for access token////////////

    const access_token = body.get("access_token");

    // Validate access_token
    const access_token_created = "AAH-ORDER_Form";
    if (access_token !== access_token_created) {
      return NextResponse.json(
        { message: `${process.env.NEXT_PUBLIC_URL}/order` }
        // { status: 302 }
      );
    }

    await handleFormDataAndSaveJson(body);
    /////////////// end check for access token////////////

    /////check for a Attechment folder ////

    const path = "./Attachments";

    // Check if the "Attachment" folder exists if not making one///

    if (!fs.existsSync(path)) {
      // If not, create the "Attachment" folder
      fs.mkdirSync(path);
      console.log("Folder created: Attachment");
    } else {
      console.log("Folder already exists: Attachment");
    }

    // Parse form data
    const filer: any = body.getAll("orderFiles[]");

    const attachments = [];
    if (filer.length > 0) {
      for (let i = 0; i < filer.length; i++) {
        const file = filer[i];
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const lastModifiedDate = new Date(file.lastModified);
        const filenamewithdate = lastModifiedDate + file.name;
        const filePath = join("./", "Attachments", filenamewithdate);
        await fsPromises.writeFile(filePath, buffer);
        attachments.push({
          filename: `${i + 1}_${file.name}`,
          path: filePath,
        });
      }
    }

    const transporter = nodemailer.createTransport({
      host: "s3479.syd1.stableserver.net",
      port: 587, // Use the appropriate port for your SMTP server
      secure: false, // Set to true if your server requires a secure connection
      auth: {
        user: "support@gogrades.org",
        pass: "mastermindsASS!@2",
      },
    });

    const mailOptions: any = {
      from: "New Order Form | Gogrades.org <support@gogrades.org>",
      to: `support@gogrades.org`,
      subject: `New Order Form | Gogrades.org`,
      html: `
      <p style="font-weight: bold; font-size: 20px">Order Details</p>

      <hr />

      <b>Order ID</b> ${body.get("orderId")} <br />
      <b>Type of Paper:</b> ${body.get("Type_of_Paper")} <br />
      <b>Task/Acadamic Level:</b> ${body.get("Academic_Level")} <br />
      <b>Order Subject:</b> ${body.get("sel_subject")} <br />
      <b>Referencing Style:</b> ${body.get("Referencing_Style")} <br />
      <b>Number of Sources:</b> ${body.get("Number_of_Sources")} <br />
      <b>Paper Standard:</b> ${body.get("Paper_Standard")} <br />
      <b>Number of Pages:</b> ${body.get("Number_of_Pages")} <br />
      <b>Preferred Language Style:</b> ${body.get(
        "Preferred_Language_Style"
      )} <br />
      <b>Paper Format:</b> ${body.get("Paper_Format")} <br />
      <b>Order Deadline:</b> ${body.get("deadline")} <br />
      <b>Order Topic:</b> ${body.get("topic")} <br />
      <br />

      <p style="font-weight: bold; font-size: 20px">Contact Details</p>

      <hr />

      <b>Order Candidate Name:</b> ${body.get("order_candidate_name")} <br />
      <b>Order Candidate Email:</b> ${body.get("order_candidate_email")} <br />
      <b>Order Candidate Phone Number:</b> ${body.get("order_phone_num")} <br />
      <b>Country:</b> ${body.get("order_country")} <br />
      <b>Order Additional Notes:</b> ${body.get("additional_note")} <br />
      <br />

      <p style="font-weight: bold; font-size: 20px">Price Details</p>

      <hr />

      <b>Payment Status:</b> Not Paid <br />
      <b>Payment Amount:</b> ${body.get("pricetotal")} <br />
      <b>Price Per Page:</b> ${body.get("PricePerPage")} <br />
      <b>Payment Unit:</b> ${body.get("priceUnit")} <br />

      <hr/>

      <b> CurrentURL : </b> ${body.get("currentURL")} <br/>
      <b> Location Details : </b> ${body.get("locationDetails")} <br/>


    `,
      attachments,
    };

    ////////// Stripe ///////
    const price_unit = body.get("priceUnit") as string;
    const CurrencySymbol = price_unit.split(" ")[1];
    const pricetotal = body.get("pricetotal") as string;
    const orderId = body.get("orderId") as string;
    const pricetotalWithoutCurrency = price_unit.replace(/[^a-zA-Z]/g, "");
    const finalPaymentUnit = Buffer.from(pricetotalWithoutCurrency).toString(
      "base64"
    );
    const finalTotalAmount = Buffer.from(pricetotal).toString("base64");
    const finalProductName = Buffer.from("Digital Service").toString("base64");
    const orderToken = Buffer.from(orderId).toString("base64");

    const finalUrl = Buffer.from(
      "https://gogrades.org/api/afterPaymentReceived"
    ).toString("base64");

    // const paymentLinkStripe = `https://eduresearchers.com/test-payment/secure-pay-external-2.php?cevpr_havg=${finalPaymentUnit}&cevpr_nzbhag=${finalTotalAmount}&cebqhpg_anzr=${finalProductName}&gbxra_rkgreany=${orderToken}&url=${finalUrl}`;
    const paymentLinkStripe = `https://mastermindsenterprises.com/stripe-version-2/secure-pay-external-2.php?cevpr_havg=${finalPaymentUnit}&cevpr_nzbhag=${finalTotalAmount}&cebqhpg_anzr=${finalProductName}&gbxra_rkgreany=${orderToken}&url=${finalUrl}`;

    /////////////////// end stirp////////////

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Email send error:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    const mailOptionsClient: any = {
      from: "GoGrades® Alert - Order Received <support@gogrades.org>",
      to: `${body.get("order_candidate_email")}`,
      subject: `We Have Received Your Order – Complete Your Payment Now | Gogrades.org`,
      html: `
      <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Order Email </title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      padding: 20px;
      margin: 0;
    "
  >
    <div
      style="
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 0px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      "
    >
      <!-- Header -->
      <div
        style="
          background-color: #091540;
          padding: 10px;
          border-radius: 8px 8px 0 0;
          text-align: center;
        "
      >
        <img
          style="height: 60px"
          src="https://res.cloudinary.com/darpb8kox/image/upload/v1727269997/logo-web_gaakgx.png"
          alt="Logo"
        />
      </div>

           <!-- Main Content -->
      <table
        width="100%"
        style="
          text-align: center;
          margin-bottom: 20px;
          padding-top: 30px;
          height: 200px;
        "
      >
        <tr>
          <td>
            <h2
              style="
                font-size: 28px;
                font-weight: bold;
                color: #1f2937;
                margin-bottom: 8px;
              "
            >
              Thank You For Your Order!
            </h2>
            <p
              style="
                font-weight: 700;
                font-size: 16px;
                color: #4b5563;
                margin-bottom: 25px;
                text-transform: capitalize;
              "
            >
              We are currently processing your order. <br />
              Our team of experts will contact you shortly.
            </p>

            <a
              href="${paymentLinkStripe}"
              style="
                border-radius: 10px;
                background-color: #091540;
                padding: 10px 20px;
                text-decoration: none;
                color: whitesmoke;
                font-size: 16px;
              "
              >Pay Now</a
            >

            <p
              style="
                font-weight: 700;
                font-size: 16px;
                color: #4b5563;
                margin-top: 30px;
                text-transform: capitalize;
              "
            >
              Please click the Pay Now button to complete your payment.<br />
              This will allow us to start the working of your order
              immediately<br />
              and keep you updated on its progress.
            </p>
          </td>
        </tr>
      </table>

      <!-- Order Summary -->
      <div style="padding-top: 20px; margin-bottom: 20px; padding: 10px 40px">
        <hr style="margin-top: 20px" />

        <h3 style="font-size: 20px; color: #1f2937">Personal Details</h3>
        <table width="100%">
          <tr>
            <td style="font-size: 14px">Name</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "order_candidate_name"
            )}</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Email</td>
            <td style="font-weight: 600; text-align: right; text-decoration: none; ">${body.get(
              "order_candidate_email"
            )}</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Phone Number</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "order_phone_num"
            )}</td>
          </tr>
          
        </table>
        <hr style="margin-top: 20px" />

        <h3 style="font-size: 20px; color: #1f2937; margin-top: 20px">
          Order Details
        </h3>
        <table width="100%">
          <tr>
            <td style="font-size: 14px">Type of Paper</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "Type_of_Paper"
            )}</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Task/Academic Level</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "Academic_Level"
            )}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Subject</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "sel_subject"
            )}</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Referencing Style</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "Referencing_Style"
            )}</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Number of Sources</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "Number_of_Sources"
            )}</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Paper Standard</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "Paper_Standard"
            )}</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Preferred Language Style</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "Preferred_Language_Style"
            )}</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Paper Format</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "Paper_Format"
            )} </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Deadline</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "deadline"
            )} </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Topic</td>
            <td style="font-weight: 600; text-align: right">${body.get(
              "topic"
            )} </td>
          </tr>
        </table>

        <hr style="margin-top: 20px" />
        <h3 style="font-size: 20px; color: #1f2937; margin-top: 20px">
          Order Pricing
        </h3>
        <table width="100%">
          
          <tr>
            <td style="font-size: 14px">Price Per Page</td>
            <td style="font-weight: 600; text-align: right">${CurrencySymbol}${body.get(
        "PricePerPage"
      )}</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Discount</td>
            <td style="font-weight: 600; text-align: right; text-transform: uppercase;">50% Off</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Ai & Turnitin Report</td>
            <td style="font-weight: 600;
              background: #091540;
              padding: 2px;
              border-radius: 20px;
              display: inline;
              float: right;
              width: 30%;
              text-align: center;
              font-size: 12px;
              color: white;
              text-transform: uppercase;
              font-weight: 600; 
              ">Free</td>
          </tr>
          <tr>
            <td style="font-size: 14px">Currency</td>
            <td style="font-weight: 600; text-align: right; text-transform: uppercase; ">${body.get(
              "priceUnit"
            )}</td>
          </tr>
          <tr>
            <td style="font-size: 14px; font-weight: 600">Totat Price</td>
            <td style="font-weight: 600; text-align: right">${CurrencySymbol}${body.get(
        "pricetotal"
      )}</td>
          </tr>
        </table>
        <hr style="margin-top: 20px" />
      </div>

      <!-- WhatsApp Section -->
      <div style="text-align: center; margin-bottom: 10px; padding: 20px">
        <div
          style="border: 1px dashed #cccccc; border-radius: 5px; padding: 15px"
        >
          <p style="font-size: 16px; color: #666666; margin-bottom: 15px">
            You Can Contact Our Support Team 24/7.
          </p>
          <a
            href="https://wa.me/+447593709971?text=Hi, I Need Academic Help Instantly. Could You Please Assist Me In Submitting My Assignment Before The Deadline?"
            style="
              display: inline-block;
              padding: 10px 20px;
              background-color: #25d366;
              border: none;
              border-radius: 5px;
              text-decoration: none;
              color: white;
              font-size: 16px;
              font-weight: bold;
            "
          >
            <img
              src="https://gogrades.org/web-assets/whatsapp.png"
              alt="WhatsApp Icon"
              style="height: 30px; margin-right: 10px; vertical-align: middle"
            />
            WhatsApp Now
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div
        style="
          background-color: #091540;
          color: white;
          padding: 10px;
          text-align: center;
          border-radius: 0 0 8px 8px;
          font-size: 12px;
          margin: 0;
        "
      >
        <p>© 2025 Gogrades.org. All rights reserved</p>
      </div>
    </div>
  </body>
</html>

      `,
    };

    transporter.sendMail(mailOptionsClient, (error, info) => {
      if (error) {
        console.error("Email send error:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    return NextResponse.json(
      {
        url: paymentLinkStripe,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

async function handleFormDataAndSaveJson(body: FormData): Promise<void> {
  const data: { [key: string]: any } = {};

  // Convert formData to a JSON object
  Array.from(body.entries()).forEach(([key, value]) => {
    data[key] = value;
  });
  // Extract orderId from the data
  const orderId = data.orderId;

  if (!orderId) {
    throw new Error("Order ID is missing");
  }

  // Define the directory and file path
  const dirPath = path.join(process.cwd(), "orders");
  const filePath = path.join(dirPath, `${orderId}.json`);

  // Ensure the directory exists
  await fsPromises.mkdir(dirPath, { recursive: true });

  // Save the data to the file
  await fsPromises.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");
}
