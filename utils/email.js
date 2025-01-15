const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

exports.sendVerificationEmail = async (email, token) => {
    const verificationUrl = `http://localhost:5000/api/auth/verify-email/${token}`;
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Verify your email',
        html: <p>Please verify your email by clicking <a href="${verificationUrl}">here</a>.</p>,
    };

    return transporter.sendMail(mailOptions);
};