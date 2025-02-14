import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(req: NextRequest, res: NextResponse) {
  // Get data from URL parameters
  const searchParams = req.nextUrl.searchParams;

  // Now you can use these variables as needed
  const afterPaymentToken = searchParams.get("after_payment_token") as string;
  const paymentStatus = searchParams.get("xxxpayment_status") as string;
  const OrderId = searchParams.get("payment_id") as string;

  // Email settings
  const toEmail = "support@gogrades.org"; // Change this to your admin email address
  // Send email
  if (paymentStatus === "true" && afterPaymentToken && OrderId) {
    try {
      // send msg to support
      const emailSent = await sendEmail(
        paymentStatus,
        afterPaymentToken,
        OrderId,
        toEmail
      );
      // send msg to client

      const filePath = path.join(
        process.cwd(),
        "orders",
        `${afterPaymentToken}.json`
      );
      try {
        await ReadJSONAndSendEmail(afterPaymentToken, filePath);
      } catch (error) {
        console.log("error during sending email to client", error);
      }

      if (emailSent) {
        console.log("Suport Email sent successfully");
        return NextResponse.redirect("https://gogrades.org/thankyou-order");
      } else {
        console.error("Email sending failed");
        return NextResponse.redirect("https://gogrades.org/order");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.redirect("https://gogrades.org/order");
    }
  } else {
    return NextResponse.redirect("https://gogrades.org/order");
  }
}

async function sendEmail(
  paymentStatus: string,
  afterPaymentToken: string,
  paymentId: string,
  toEmail: string
): Promise<boolean> {
  const emailOptions = {
    host: "s3479.syd1.stableserver.net",
    auth: {
      user: "support@gogrades.org", // Change this to your SMTP username
      pass: "mastermindsASS!@2", // Change this to your SMTP password
    },
    secure: false,
    port: 587,
  };

  const transporter = nodemailer.createTransport(emailOptions);

  try {
    // Recipients
    const recipients = [toEmail]; // Change this to the recipient email address

    // Content
    const paymentStatusText =
      paymentStatus === "true"
        ? '<span style="color: white; background-color: green; padding: 2px; width: 10%; display: inline-block; text-align: center; border-radius: 30px; font-size: 14px !important;">Paid</span>'
        : "Not Paid";
    const payment_portal = "Masterminds (Stripe)";

    // Email body
    const emailBody = `<b>Payment Status</b>: ${paymentStatusText} <br> <b>Order ID</b>: ${afterPaymentToken} <br> <b>Payment ID</b>: ${paymentId} <br> <b>Payment Portal</b>: ${payment_portal}`;

    // Send email
    const info = await transporter.sendMail({
      from: "support@gogrades.org",
      to: recipients.join(","),
      subject: "Payment Notification",
      html: emailBody,
    });

    return true;
  } catch (error) {
    // Log the error details
    console.error("Error sending email:", error);
    return false;
  }
}

// Check if the file exists and read it
async function ReadJSONAndSendEmail(decodedOrderId: string, filePath: string) {
  try {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(err);
        console.error(
          `File ${decodedOrderId}.json not found in the orders directory`
        );
        return;
      }

      // Read the file if it exists
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          console.error("Error reading the file:", err);
          return;
        }

        // Parse and log the file content
        try {
          const jsonData = JSON.parse(data);
          const mailOptionsClient = {
            from: "GoGrades® Alert - Order Confirmed <support@gogrades.org>",
            to: `${jsonData.order_candidate_email}`,
            subject: `Your Order # ${jsonData.orderId} is Confirmed – Thank You for Your Order! | Gogrades.org`,
            html: `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Order Email</title>
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
              Order# ${jsonData.orderId}
            </h2>
            <div
              style="
                width: 300px;
                margin: 12px auto 20px;
                font-weight: bold;
                font-size: 16px;
                background-color: #d2a125;
                color: white;
                border-radius: 5px;
                padding-bottom: 8px;
                padding-top: 8px;
              "
            >
              Thank You for Your Order!
            </div>
            <p
              style="
                font-size: 16px;
                font-weight: 500;
                color: black;
                text-transform: capitalize;
                padding: 0 40px;
                line-height: 1.8;
              "
            >
              Thank You for Your Order. Your payment has been successfully
              received. Our experts have started working on your order, and it
              will be delivered to you as soon as it's ready. If you have any
              questions or need assistance, feel free to reach out to us on
              WhatsApp.
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
            <td style="font-weight: 600; text-align: right">
              ${jsonData.order_candidate_name}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Email</td>
            <td
              style="font-weight: 600; text-align: right; text-decoration: none"
            >
              ${jsonData.order_candidate_email}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Phone Number</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.order_phone_num}
            </td>
          </tr>
        </table>
        <hr style="margin-top: 20px" />

        <h3 style="font-size: 20px; color: #1f2937; margin-top: 20px">
          Order Details
        </h3>
        <table width="100%">
          <tr>
            <td style="font-size: 14px">Type of Paper</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.Type_of_Paper}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Task/Academic Level</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.Academic_Level}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Subject</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.sel_subject}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Referencing Style</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.Referencing_Style}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Number of Sources</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.Number_of_Sources}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Paper Standard</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.Paper_Standard}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Preferred Language Style</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.Preferred_Language_Style}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Paper Format</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.Paper_Format}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Deadline</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.deadline}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Topic</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.topic}
            </td>
          </tr>
        </table>

        <hr style="margin-top: 20px" />
        <h3 style="font-size: 20px; color: #1f2937; margin-top: 20px">
          Order Pricing
        </h3>
        <table width="100%">
          <tr>
            <td style="font-size: 14px">Price Per Page</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.priceUnit.split(" ")[1]} ${jsonData.PricePerPage}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Discount</td>
            <td
              style="
                font-weight: 600;
                text-align: right;
                text-transform: uppercase;
              "
            >
              50% Off
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Ai & Turnitin Report</td>
            <td
              style="
                font-weight: 600;
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
              "
            >
              Free
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px">Currency</td>
            <td
              style="
                font-weight: 600;
                text-align: right;
                text-transform: uppercase;
              "
            >
              ${jsonData.priceUnit}
            </td>
          </tr>
          <tr>
            <td style="font-size: 14px; font-weight: 600">Totat Price</td>
            <td style="font-weight: 600; text-align: right">
              ${jsonData.priceUnit.split(" ")[1]} ${jsonData.pricetotal}
            </td>
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
            href="https://wa.me/+447593709971?text=Hello GoGrades Team, I need Academic Assistance. Could you help me complete my task on time?"
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
            Track Your Order
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
        <p>© 2024 Gogrades.org. All rights reserved</p>
      </div>
    </div>
  </body>
</html>
    
          `,
          };

          const emailOptions = {
            host: "s3479.syd1.stableserver.net",
            auth: {
              user: "support@gogrades.org", // Change this to your SMTP username
              pass: "mastermindsASS!@2", // Change this to your SMTP password
            },
            secure: false,
            port: 587,
          };
          const transporter = nodemailer.createTransport(emailOptions);

          transporter.sendMail(mailOptionsClient, (error: any, info: any) => {
            if (error) {
              console.error("Email send error:", error);
            } else {
              console.log("Client Email sent: " + info.response);
            }
          });

          fs.unlink(filePath, (err) => {
            if (err) {
              console.error("Error deleting the file:", err);
            } else {
              console.log("File deleted successfully");
            }
          });
        } catch (parseErr) {
          console.error("Error parsing JSON:", parseErr);
        }
      });
    });
  } catch (error) {
    console.log("ReadJSONAndSendEmail", error);
  }
}
