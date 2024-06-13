/**
 * @param {Model} dbModel - Sequelize model to fetch data from
 * @param {WebSocket.Server} wss - WebSocket server instance
 * @param {number} [limit] - Number of records to fetch in each batch
 * @param {number} [batch] - Number of records to fetch in each batch
 * @returns {Promise<void>}
 * @author: Arijeet Mukherjee
 */

const nodemailer = require('nodemailer');

/**
 * How to use this Websocket in client/frontend code:
 * const ws = new WebSocket('ws://localhost:5000');
 * ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            // Process received data
            console.log(data);
    };
        
    ws.onclose = () => {
            console.log('Connection closed');
    };
* fetch('http://localhost:5000/leakCredentials/getAllLeakCredentials?limit=10&batchSize=10')
  .then(res => res.json())
  .then(console.log);
*/
const WebSocket = require('ws');
//Fetch all data from a database model in chunks and send it to all WebSocket clients
async function fetchAllDataInChunks(dbModel, wss, limit, batch, conditions, otherProps, serviceIdentifier, delay = 1000) {
    const batchSize = batch || 2; // Adjust batch size as needed
    let offset = limit || 0;
    while (true) {
        const sequelizeQueryObject = { offset, limit: batchSize, where: conditions ? conditions : {}, ...otherProps }
        const data = await dbModel.findAll(sequelizeQueryObject);

        // Send data to all WebSocket clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                // Include service identifier in the data sent to the clients
                client.send(JSON.stringify({ service: serviceIdentifier, data }));
            }
        });

        if (data.length < batchSize) {
            break; // No more data available
        }

        offset += batchSize;

        // Delay the execution of the next batch
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

async function isEntryPresentForLanguage(model, language_id, conditionProp) {
    const existinglanguageId = await model.findOne({
        where: {
            language_id: language_id,
            ...conditionProp
        }
    }).then(data => {
        return data
    })
    return existinglanguageId;
}

const _createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.MAIL_HOST_DEV,
        port: process.env.MAIL_PORT_DEV,
        secure: process.env.ENABLE_SSL_DEV ? true : false,
        auth: {
            user: process.env.AUTH_USER_DEV,
            pass: process.env.AUTH_PASS_DEV
        }
    });
}
/**
 * @props requestObj:
 * 
 * from: process.env.FROM_EMAIL_DEV,
 * to: req.body.to,
 *   cc: req.body?.cc || [],
 *  bcc: req.body?.bcc || [],
 *  subject: req.body.subject,
 *  text: req.body?.text,
 *  html: req.body?.html,
 *  attachments: req.body?.attachments,
 *  icalEvent: req.body?.icalEvent,
 *  alternatives: req.body?.alternatives,
 *
 * @props typeOfMail :
 * "normal" OR "batch"
 * 
 */
async function sendMail(requestObj, typeOfMail) {
    const transporter = _createTransporter();
    const mailOptions = {
        from: process.env.FROM_EMAIL_DEV,
        ...requestObj
    };
    if (typeOfMail === "normal") {
        return await sendNormalMail(transporter, mailOptions);
    } else if (typeOfMail === "batch") {
        sendBatchMail();
    }
}

async function sendBatchMail() {
    console.log("Method in cooking!!");
}

async function sendNormalMail(transporter, mailOptions) {
    return new Promise((resolve, reject) => {
        try {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(info);
                }
            });
        } catch (error) {
            reject(error);
        }
    });
}



module.exports = { fetchAllDataInChunks, isEntryPresentForLanguage, sendMail };
