/**
 * @param {Model} dbModel - Sequelize model to fetch data from
 * @param {WebSocket.Server} wss - WebSocket server instance
 * @param {number} [limit] - Number of records to fetch in each batch
 * @param {number} [batch] - Number of records to fetch in each batch
 * @returns {Promise<void>}
 * @author: Arijeet Mukherjee
 */

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
async function fetchAllDataInChunks(dbModel, wss, limit, batch, conditions) {
    const batchSize = batch || 2; // Adjust batch size as needed
    let offset = limit || 0;
    while (true) {
        const data = await dbModel.findAll({ offset, limit: batchSize, where: conditions ? conditions : {} });

        // Send data to all WebSocket clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(data));
            }
        });

        if (data.length < batchSize) {
            break; // No more data available
        }

        offset += batchSize;
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
    return existinglanguageId !== null;
}

module.exports = { fetchAllDataInChunks, isEntryPresentForLanguage };
