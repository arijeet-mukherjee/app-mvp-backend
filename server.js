const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const WebSocketManager = require('./_middleware/websocketManager');
const wssManager = new WebSocketManager(server);

const { appRouter } = require('./api/index');

require('dotenv').config();

app.use((req, res, next) => {
    req.wssManager = wssManager;
    next();
});

app.use('/api', appRouter);

server.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}!`);
});
