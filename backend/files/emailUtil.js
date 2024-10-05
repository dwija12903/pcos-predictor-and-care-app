const nodemailer = require('nodemailer');

async function sendEmail(to, subject, html) {
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,      // Port for SMTP (usually 465)
        secure: true,   // Use SSL
        auth: {
            user: 'dwija1209@gmail.com', // Your email
            pass: 'bffm jzxe kbmi midd', // Your email password or app password
        },
    });

    let info = await transporter.sendMail({
        from: '"PCOS Predictor & Care App" <dwija1209@gmail.com>', // Sender address
        to: to,             // Receiver's email
        subject: subject,   // Subject line
        html: html,         // HTML body
    });

    console.log('Message sent: %s', info.messageId);
}

module.exports = { sendEmail };
