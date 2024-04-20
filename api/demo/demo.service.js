const bcrypt = require('bcryptjs');
const db = require('_helpers/db');

module.exports = {
    getAll,
    getPrismSales,
    delete: _delete
};

async function getAll() {
    return await db.PrismSales.findAll();
}


async function _delete(id) {
    const PrismSales = await getPrismSales(id);
    await PrismSales.destroy();
}

// helper functions

async function getPrismSales(id) {
    const PrismSales = await db.PrismSales.findByPk(id);
    if (!PrismSales) throw 'Sales not found';
    return PrismSales;
}