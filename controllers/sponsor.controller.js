const db = require('../utils/db');


const getAll = async () => {
    const [safaris, err] = await db.query("SELECT * FROM sponsors");
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

const update = async (id, data) => {
    const sponsor = await getById(id);
    if (!sponsor) {
        return null;
    } else {
        const [req, err] = await db.query("UPDATE sponsors SET sponsor_name = ?, description = ?, sponsor_img = ? WHERE id = ? LIMIT 1", 
        [
            data.sponsor_name || sponsor.sponsor_name, 
            data.description || sponsor.description,
            data.sponsor_img || sponsor.sponsor_img,
            id
        ]);

        return getById(id);
    }
};

const remove = async (id) => {
    const [req, err] = await db.query("DELETE FROM sponsors WHERE id = ? LIMIT 1", [id]);
    if (!req) {
        return false;
    }
    return true;
};


module.exports = {
    getAll,
    getById,
    add,
    update,
    remove
};