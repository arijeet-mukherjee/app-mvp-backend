const { db, initializeDb } = require('../../_helpers/db');
const { Sequelize } = require('sequelize');
const { sendMail } = require('../../_util/index');
initializeDb();

async function thankYouMail(req, res) {
    const requestEmailObj = {
        to: req.body.email,
        subject: "Thank you for subscribing to our newsletter",
        text: "Thank you for subscribing to our newsletter. Stay subscribed to our newsletter to get the latest updates on our products and services.",
    };
    const requestEmailType = "normal";
    const createNewUser = {
        id: req.body.id,
        email: req.body.email,
        status: 'Enable',
        subscriptionUrl: req.body.subscriptionUrl
    };
    try {
        await db.models.Newsletter.create(createNewUser)
            .then((data) => {
                sendMail(requestEmailObj, requestEmailType)
                res.status(200).json(data);
            })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}




module.exports = { thankYouMail }