const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/Users');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Error hashing password" });
        }
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword
        });
        newUser.save()
            .then(() => res.json({ success: true, message: "User registered successfully" }))
            .catch(err => res.status(500).json({ success: false, message: "Error saving user" }));
    });
});

module.exports = router;