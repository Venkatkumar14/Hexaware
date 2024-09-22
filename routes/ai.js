// routes/ai.js
const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const router = express.Router();

// OpenAI configuration (replace with your API key)
const configuration = Configuration({
    apiKey: 'YOUR_OPENAI_API_KEY',
});
const openai = new OpenAIApi(configuration);

// Speech Feedback API
router.post('/feedback', async (req, res) => {
    const { text } = req.body;

    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `Give feedback on the pronunciation and clarity of this speech: "${text}"`,
            max_tokens: 50,
        });

        const feedback = response.data.choices[0].text.trim();
        res.json({ feedback });
    } catch (error) {
        res.status(500).json({ error: 'Error generating AI feedback' });
    }
});

module.exports = router;
