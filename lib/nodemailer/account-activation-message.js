const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const filePath = path.join(
  process.cwd(),
  "public/views/account-activation-message.html"
);
let htmlFile = fs.readFileSync(filePath, "utf-8");

const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;

const host = process.env.NEXT_PUBLIC_SMTP_HOST;
const port = process.env.NEXT_PUBLIC_SMTP_PORT;
const service = process.env.NEXT_PUBLIC_SMTP_SERVICE;
const user = process.env.NEXT_PUBLIC_SMTP_MAIL;
const pass = process.env.NEXT_PUBLIC_SMTP_PASSWORD;

export const sendAccountActivationMessage = async ({ email, url, expires }) => {
  // Replace placeholders with values from the request body
  const html = htmlFile
    .replace(/{{url}}/g, url)
    .replace(/{{expires}}/g, expires)
    .replace(/{{clientUrl}}/g, clientUrl);

  const transporter = nodemailer.createTransport({
    host,
    port,
    service,
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: `Devcent <${user}>`,
    to: email,
    subject: "Account Activation",
    html,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};