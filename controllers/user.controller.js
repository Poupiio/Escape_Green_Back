const db = require('../utils/db');


const getAll = async () => {
    try {
        const [users, err] = await db.query("SELECT * FROM users");

        return users;
    } catch (err) {
        console.log(err);
    }
};

const getById = async (id) => {
    const [user, err] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    if (!user || user.length == 0) {
        return null;
    }
    // getById sert ici à récupérer un seul user. On retourne donc user[0], car MySQL répond toujours un array.
    return user[0];
};


module.exports = {
    getAll,
    getById,
};