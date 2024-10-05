const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendEmail(to, subject, html) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,      // Port for SMTP (usually 465)
        secure: true,   // Use SSL
        auth: {
            user: process.env.EMAIL_ADDRESS, 
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });

    let info = await transporter.sendMail({
        from: `"PCOS Predictor & Care App" <${process.env.EMAIL_ADDRESS}>`, // Sender address
        to: to,             // Receiver's email
        subject: subject,   // Subject line
        html: html,         // HTML body
    });

    console.log('Message sent: %s', info.messageId);
}

module.exports = { sendEmail };
