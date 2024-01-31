const db = require('../utils/db');


const getAll = async () => {
    const [safaris, err] = await db.query("SELECT * FROM safaris");
    return safaris;
};


module.exports = {
    getAll,
};