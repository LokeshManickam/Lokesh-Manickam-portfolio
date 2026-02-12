const Contact = require("../models/Contact");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    // Validate input
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Save to MongoDB
    const newContact = new Contact({
      name,
      email,
      mobile,
      message
    });

    await newContact.save();

    res.status(200).json({ msg: "Message saved successfully" });

  } catch (error) {
    console.error("❌ Contact form error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};
