const fs = require("fs");
const path = require("path");
const decodedOrderId = "2409271806";
const filePath = path.join("../", "orders", `${decodedOrderId}.json`);
const nodemailer = require("nodemailer");

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

async function ReadJSONAndSendEmail(decodedOrderId, filePath) {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
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
          from: "GoGrades® Alert <support@gogrades.org>",
          to: `arsalan1664@gmail.com`,
          subject: `We Have Received Your Order | Gogrades.org`,
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
                <p style="font-size: 16px; color: #4b5563; margin-bottom: 25px">
                   We Are Processing Your Order, Our Experts Will Contact You Soon.
                </p>
                <a
                  href='/'
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
                <td style="font-weight: 600; text-align: right">${jsonData.order_candidate_name}</td>
              </tr>
              <tr>
                <td style="font-size: 14px">Email</td>
                <td style="font-weight: 600; text-align: right; text-decoration: none; ">${jsonData.order_candidate_email}</td>
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
                <td style="font-weight: 600; text-align: right"> ${jsonData.deadline} </td>
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
                ${jsonData.PricePerPage}</td>
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
                <td style="font-weight: 600; text-align: right; text-transform: uppercase; ">
                  ${jsonData.priceUnit}
  
                </td>
              </tr>
              <tr>
                <td style="font-size: 14px; font-weight: 600">Totat Price</td>
                <td style="font-weight: 600; text-align: right"> ${jsonData.pricetotal}</td>
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
            <p>© 2024 Gogrades.org. All rights reserved</p>
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
      } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
      }
    });
  });
}

ReadJSONAndSendEmail(decodedOrderId, filePath);
