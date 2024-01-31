const db = require('../utils/db');


const getAll = async () => {
    const [images, err] = await db.query("SELECT * FROM images");
    return images;
};


module.exports = {
    getAll,
};