const express = require("express");

const {
  chat,
  getMessages,
} = require("../controllers/chatController");

const router = express.Router();

router.post("/", chat);
router.get("/history", getMessages);

module.exports = router;