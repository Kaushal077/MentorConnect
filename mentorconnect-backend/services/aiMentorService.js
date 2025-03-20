const axios = require('axios');

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";
const API_KEY = process.env.GEMINI_API_KEY;

async function getMentorResponse(prompt) {
    try {
        const response = await axios.post(`${GEMINI_API_URL}?key=${API_KEY}`, {
            contents: [{ parts: [{ text: prompt }] }]
        });

        return response.data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error("Gemini API Error:", error.response ? error.response.data : error.message);
        return "Sorry, I couldn't generate a response. Please try again.";
    }
}

module.exports = { getMentorResponse };
