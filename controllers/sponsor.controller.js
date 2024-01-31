const db = require('../utils/db');


const getAll = async () => {
    const [safaris, err] = await db.query("SELECT * FROM safaris");
    return safaris;
};

const getById = async (id) => {
    const [sponsor, err] = await db.query("SELECT * FROM sponsors WHERE id = ?", [id]);
    if (!sponsor) {
        return null;
    }
    return sponsor[0];
};


const add = async (data, user_id) => {

    const [req, err] = await db.query("INSERT INTO sponsors (sponsor_name, description, sponsor_img, img_id) VALUES (?,?,?,?)", [data.sponsor_name, data.sponsor_img, data.img_id, user_id]);

    if (!req) {
        return null;
    }
    return getById(req.insertId);
};

module.exports = {
    getAll,
    getById,
    add,

};