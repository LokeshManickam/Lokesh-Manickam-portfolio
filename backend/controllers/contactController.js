const Contact = require("../models/Contact");
const sendMail = require("../services/mailService");


exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    if (!name || !email || !mobile || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const contact = new Contact({
      name,
      email,
      mobile,
      message
    });

    await contact.save();

    return res.status(200).json({
      success: true,
      message: "Message saved successfully"
    });

  } catch (err) {
    console.error("CONTACT ERROR:", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
