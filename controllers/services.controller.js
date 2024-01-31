const db = require('../utils/db');


const getAll = async () => {
    const [services, err] = await db.query("SELECT * FROM services");
    return services;
};


module.exports = {
    getAll,
};