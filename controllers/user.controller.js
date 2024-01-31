const db = require('../utils/db');


const getAll = async () => {
    const [users, err] = await db.query("SELECT * FROM user");
    return users;
};


module.exports = {
    getAll,
};