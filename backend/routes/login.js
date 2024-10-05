const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/Users');
const { sendEmail } = require('../files/emailUtil');
const router = express.Router();

router.post('/', (req, res) => {
    const { email, password } = req.body;

    UserModel.findOne({ email: email })
        .then(user => {
            if (!user) {
                return res.json({ success: false, message: "No Record Found" });
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({ success: false, message: "Server error" });
                }
                if (isMatch) {
                    sendEmail(
                        email,
                        "Welcome to Women's EndoInsights",
                        `<h3>Welcome, ${user.name}!</h3>
                        <p>We're thrilled to have you on board with the Women's EndoInsights: PCOS Predictor and Care App.</p>
                        <p>Thank you for logging in. You can now explore all the features and resources we offer to help you manage PCOS effectively.</p>
                        <p>Best regards,<br><a href="https://www.linkedin.com/in/dwijapanchal" target="_blank">Dwija Panchal</a></p>`
                    )
                        .then(() => {
                            res.json({ success: true, message: "Successfully logged in", name: user.name });
                        })
                        .catch(error => {
                            console.error('Error sending email:', error);
                            res.json({ success: true, message: "Successfully logged in, but failed to send email", name: user.name });
                        });
                } else {
                    return res.json({ success: false, message: "Password is incorrect" });
                }
            });
        })
        .catch(err => {
            return res.status(500).json({ success: false, message: "Server error" });
        });
});

module.exports = router;