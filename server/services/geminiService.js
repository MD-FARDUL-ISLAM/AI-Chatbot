const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateReply(message) {
  const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: [
      {
        role: "user",
        parts: [
          {
            text: message,
          },
        ],
      },
    ],
  });

  return response.text;
}

module.exports = {
  generateReply,
};