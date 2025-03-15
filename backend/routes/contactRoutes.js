const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// ✅ Submit Contact Form (POST)
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error submitting contact form:", error);
    res.status(500).json({ error: "Server error. Try again later." });
  }
});

// ✅ Fetch all contact messages (GET)
router.get("/messages", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    console.error("❌ Error fetching messages:", error);
    res.status(500).json({ error: "Server error. Try again later." });
  }
});

module.exports = router;
