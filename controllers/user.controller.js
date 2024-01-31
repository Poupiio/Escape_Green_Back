const db = require('../utils/db');


const getAll = async () => {
    try {
        const [users, err] = await db.query("SELECT * FROM users");
        
        return users;
    } catch (err) {
        console.log(err);
    }
};


module.exports = {
    getAll,
};