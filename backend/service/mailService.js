const nodemailer = require("nodemailer");

const sendContactEmail = async (data) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Portfolio Contact Message",
        text: `
Name: ${data.name}
Email: ${data.email}
Mobile: ${data.mobile}
Message: ${data.message}
        `
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendContactEmail;
