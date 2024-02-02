const db = require('../utils/db');

const getAll = async () => {
    const [services, err] = await db.query("SELECT sponsors.name AS sponsor_name, type.name AS type_name FROM services JOIN sponsors ON services.sponsor_id = sponsors.id JOIN type ON services.type_id = type.id");
    return services;
};


const add = async (data) => {
    const [req, err] = await db.query("INSERT INTO services (name, description, type_service, prix_ht, prix_ttc, tva, sponsor_id) VALUES (?,?,?,?,?,?,?)", [data.name, data.description, data.type_service, data.prix_ht, data.prix_ttc, data.tva, data.sponsor_id]);

    if (!req) {
        return err;
    } else {
        return true;
    }
}
const getById = async (id) => {
    const [service, err] = await db.query("SELECT * FROM services WHERE id = ?", [id]);
    if (!service) {
        return null;
    } else {
        return service[0];
    }
};
const update = async (id, data) => {
    const service = await getById(id);
    if (!service) {
        return null;
    } else {
        const [req, err] = await db.query("UPDATE services SET name = ?, description = ?, type_service = ?, prix_ht = ?, prix_ttc = ?, tva = ?, sponsor_id = ? WHERE id = ? LIMIT 1", 
        [
            data.name || sponsor.name, 
            data.description || sponsor.description,
            data.type_service || sponsor.type_service,
            data.prix_ht || sponsor.prix_ht,
            data.prix_ttc || sponsor.prix_ttc,
            data.tva || sponsor.tva,
            data.sponsor_id || sponsor.sponsor_id,
            id
        ]);

        return getById(id);
    }
};


module.exports = {
    getAll,
    getById,
    add,
    update,
    // getServiceName,
};