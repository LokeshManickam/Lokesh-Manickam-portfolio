const Contact = require("../models/Contact");
const sendContactEmail = require("../service/mailService");

const submitContactForm = async (req, res) => {
    try {
        const { name, mobile, email, message } = req.body;

        if (!name || !mobile || !email) {
            return res.status(400).json({
                success: false,
                message: "Name, mobile, and email are required"
            });
        }

        // Save to database
        const contact = await Contact.create({
            name,
            mobile,
            email,
            message
        });

        // Send email notification
        await sendContactEmail(contact);

        return res.status(201).json({
            success: true,
            message: "Message saved and email sent successfully"
        });

    } catch (error) {
        console.error("Contact Controller Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};

module.exports = { submitContactForm };
