const Contact = require("../models/Contact");
const sendMail = require("../service/mailService");

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, mobile, message } = req.body;

    // ✅ Validate input
    if (!name || !email || !mobile || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    // ✅ Save to MongoDB
    const contact = new Contact({
      name,
      email,
      mobile,
      message
    });

    await contact.save();

    // ✅ Send email notification
    await sendMail({
      name,
      email,
      mobile,
      message
    });

    // ✅ Success response
    res.status(200).json({
      success: true,
      message: "Message sent successfully"
    });

  } catch (error) {
    console.error("Contact Controller Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error while sending message"
    });
  }
};
