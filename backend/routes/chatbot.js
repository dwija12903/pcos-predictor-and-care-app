const express = require('express');
const { spawn } = require('child_process');
const router = express.Router();

router.post("/", (req, res) => {
    const userMessage = req.body.message;
    const python = spawn("python", ["./files/chatbot.py", userMessage]);
    let chatbotResponse = "";

    python.stdout.on("data", (data) => {
        chatbotResponse += data.toString();
    });

    python.on("close", (code) => {
        res.json({ response: chatbotResponse });
    });
});

module.exports = router;