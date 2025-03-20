const express = require('express');
const { generateGeminiResponse } = require('../services/geminiService');

const router = express.Router();

router.post('/chat', async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const response = await generateGeminiResponse(message);
    res.json({ response });
});

module.exports = router;
