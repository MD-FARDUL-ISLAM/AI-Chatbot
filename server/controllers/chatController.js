const Message = require("../models/Message");
const { generateReply } = require("../services/geminiService");

exports.chat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    // Save user message
    await Message.create({
      role: "user",
      content: message,
    });

    // Generate AI reply
    const reply = await generateReply(message);

    // Save AI reply
    await Message.create({
      role: "assistant",
      content: reply,
    });

    res.json({
      reply,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      error: "AI Error",
      message: error.message,
    });
  }
};
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to fetch messages",
    });
  }
};
