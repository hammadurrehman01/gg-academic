// const nodemailer = require("nodemailer");

// // Create a reusable transporter (optional for multiple emails)
// const transporter = nodemailer.createTransport({
//   host: "s3479.syd1.stableserver.net",

//   port: 587, // Use the appropriate port for your SMTP server
//   secure: false, // Set to true if your server requires a secure connection
//   auth: {
//     user: "support@gogrades.org",
//     pass: "mastermindsASS!@2",
//   },
// });

// // Create the email content
// const mailOptions =
//   from: "New Order Form | Gogrades.org <support@gogrades.org>",
//   to: `arsalan1664@gmail.com`,
//   subject: `New Order Form | Gogrades.org`,
//   text: "This is a test email sent using Nodemailer.",
//   html: `
// <!DOCTYPE html>
// <html>
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Email Template</title>
//   </head>
//   <body
//     style="
//       font-family: Arial, sans-serif;
//       background-color: #f4f4f4;
//       padding: 20px;
//       margin: 0;
//     "
//   >
//     <div
//       style="
//         max-width: 600px;
//         margin: 0 auto;
//         background-color: #ffffff;
//         padding: 0px;
//         border-radius: 8px;
//         box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//       "
//     >
//       <!-- Header -->
//       <div
//         style="
//           background-color: #091540;
//           padding: 10px;
//           border-radius: 8px 8px 0 0;
//           text-align: center;
//         "
//       >
//         <img
//           style="height: 60px"
//           src="https://res.cloudinary.com/darpb8kox/image/upload/v1727269997/logo-web_gaakgx.png"
//           alt="Logo"
//         />
//       </div>

//       <!-- Main Content -->
//       <table
//         width="100%"
//         style="
//           text-align: center;
//           margin-bottom: 20px;
//           padding-top: 30px;
//           height: 200px;
//         "
//       >
//         <tr>
//           <td>
//             <h2
//               style="
//                 font-size: 28px;
//                 font-weight: bold;
//                 color: #1f2937;
//                 margin-bottom: 8px;
//               "
//             >
//               Thank You For Your Order!
//             </h2>
//             <p style="font-size: 16px; color: #4b5563; margin-bottom: 25px">
//               Click on pay now, we are processing your order
//             </p>
//             <a
//               href="/"
//               style="
//                 border-radius: 10px;
//                 background-color: #091540;
//                 padding: 10px 20px;
//                 text-decoration: none;
//                 color: whitesmoke;
//                 font-size: 16px;
//               "
//               >Pay now</a
//             >
//           </td>
//         </tr>
//       </table>

//       <!-- Order Summary -->
//       <div style="padding-top: 20px; margin-bottom: 20px; padding: 10px 40px">
//         <hr style="margin-top: 20px" />

//         <h3 style="font-size: 20px; color: #1f2937">Personal Details</h3>
//         <table width="100%">
//           <tr>
//             <td style="font-size: 14px">Name</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Email</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Phone Number</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Institution Country:</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//         </table>
//         <hr style="margin-top: 20px" />

//         <h3 style="font-size: 20px; color: #1f2937; margin-top: 20px">
//           Order Details
//         </h3>
//         <table width="100%">
//           <tr>
//             <td style="font-size: 14px">Type of Paper</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Task/Academic Level</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Subject</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Referencing Style</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Number of Sources</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Paper Standard</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Preferred Language Style</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Paper Format</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Deadline</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Topic</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//         </table>

//         <hr style="margin-top: 20px" />
//         <h3 style="font-size: 20px; color: #1f2937; margin-top: 20px">
//           Order Price
//         </h3>
//         <table width="100%">
//           <tr>
//             <td style="font-size: 14px">Number of Pages</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Price Per Page</td>
//             <td style="font-weight: 600; text-align: right">$197.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Discount</td>
//             <td style="font-weight: 600; text-align: right">$15.76</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px">Turnitin Report</td>
//             <td style="font-weight: 600; text-align: right">$5.00</td>
//           </tr>
//           <tr>
//             <td style="font-size: 14px; font-weight: 600">Totat Price</td>
//             <td style="font-weight: 600; text-align: right">$5.00</td>
//           </tr>
//         </table>
//         <hr style="margin-top: 20px" />
//       </div>

//       <!-- WhatsApp Section -->
//       <div style="text-align: center; margin-bottom: 10px; padding: 20px">
//         <div
//           style="border: 1px dashed #cccccc; border-radius: 5px; padding: 15px"
//         >
//           <p style="font-size: 16px; color: #666666; margin-bottom: 15px">
//             You Can Contact Our Support Team 24/7.
//           </p>
//           <a
//             href="https://wa.me/+447593709971?text=Hi, I Need Academic Help Instantly. Could You Please Assist Me In Submitting My Assignment Before The Deadline?"
//             style="
//               display: inline-block;
//               padding: 10px 20px;
//               background-color: #25d366;
//               border: none;
//               border-radius: 5px;
//               text-decoration: none;
//               color: white;
//               font-size: 16px;
//               font-weight: bold;
//             "
//           >
//             <img
//               src="https://gogrades.org/web-assets/whatsapp.png"
//               alt="WhatsApp Icon"
//               style="height: 30px; margin-right: 10px; vertical-align: middle"
//             />
//             WhatsApp Now
//           </a>
//         </div>
//       </div>

//       <!-- Footer -->
//       <div
//         style="
//           background-color: #091540;
//           color: white;
//           padding: 10px;
//           text-align: center;
//           border-radius: 0 0 8px 8px;
//           font-size: 12px;
//           margin: 0;
//         "
//       >
//         <p>© 2024 Gogrades.org. All rights reserved</p>
//       </div>
//     </div>
//   </body>
// </html>

//   `,
// };

// // Send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error("Error sending email:", error);
//   } else {
//     console.log("Email sent: %s", info.response);
//   }
// });

// ////////
