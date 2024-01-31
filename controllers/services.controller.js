const db = require('../utils/db');

const getAll = async () => {
    try {
        const [services, err] = await db.query("SELECT * FROM services");
        console.log(services)
        return services;
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    getAll,
};