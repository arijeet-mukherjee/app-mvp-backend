const nodemailer = require('nodemailer');
const { db, initializeDb } = require('../../_helpers/db');
initializeDb();

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 465,
    auth: {
        user: "9acd27953bf3a8",
        pass: "dbd6a0aee4f822"
    }
});




module.exports = {}