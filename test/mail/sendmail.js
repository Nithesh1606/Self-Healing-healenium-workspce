const nodemailer = require('nodemailer');
const { promisify } = require('util');
const { SOFT_EMAIL, SOFT_TO_EMAIL, SOFT_CC_EMAIL, EMAIL_PASSWORD, EMAIL, SOFT_EMAIL_PASSWORD } = require('../pageobjects/env');

async function sendEmail(subject, body, attachments = []) {
  console.log('Sending email...');

  // Configure nodemailer transporter
  let transporter = nodemailer.createTransport({
    // service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587, // use 465 for SSL
    secure: false, // true for 465, false for other port
    auth: {
      user: SOFT_EMAIL,
      pass: EMAIL_PASSWORD,
    },
  });

  // Configure email options
  let mailOptions = {
    from: SOFT_EMAIL,
    to: SOFT_TO_EMAIL,
    cc: SOFT_CC_EMAIL,
    subject: subject,
    text: body,
    attachments: attachments,
  };

  console.log(SOFT_EMAIL_PASSWORD);
  console.log(SOFT_CC_EMAIL);
  // Promisify the sendMail function
  const sendMailAsync = promisify(transporter.sendMail).bind(transporter);

  console.log(JSON.stringify(mailOptions));

  try {

    console.log('about send mail....');
    // Send email
    const result = await sendMailAsync(mailOptions);
    console.log('Email sent successfully. Result:', result);
    // You can handle success here if needed
    return result;
  } catch (err) {
    console.error('Error sending email:', err);
    // You can throw an error or handle it accordingly
    throw err;
  }
}

module.exports = sendEmail;