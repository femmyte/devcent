const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const filePath = path.join(process.cwd(), "public/views/welcome-message.html");
let htmlFile = fs.readFileSync(filePath, "utf-8");

const clientUrl = process.env.CLIENT_URL;

const host = process.env.SMTP_HOST;
const port = process.env.SMTP_PORT;
const service = process.env.SMTP_SERVICE;
const user = process.env.SMTP_MAIL;
const pass = process.env.SMTP_PASSWORD;

export const sendWelcomeMessage = async ({ email }) => {
  // Replace placeholders with values from the request body
  const html = htmlFile.replace(/{{clientUrl}}/g, clientUrl);

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
    subject: "Welcome to Devcent",
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
