const express = require('express');
const app = express();

const { appRouter } = require('./api/index');

require('dotenv').config();

app.use('/api', appRouter);

app.listen(process.env.PORT, () => {
    console.log(`App listening on port ${process.env.PORT}!`);
});