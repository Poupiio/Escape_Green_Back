const db = require('../utils/db');
// const multer = require('multer');
// const path = require('path');

// // Configuration de Multer pour gérer le téléchargement des images
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images'); // Dossier où les images seront stockées sur le serveur
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//         const extension = path.extname(file.originalname);
//         cb(null, file.fieldname + '-' + uniqueSuffix + extension);
//     },
// });

// const upload = multer({ storage: storage });

// const getImageUrl = (filename) => {
//     // Construire l'URL complète de l'image
//     return `/images/${filename}`;
// };


// const getAll = async () => {
//     const [safaris, err] = await db.query("SELECT * FROM sponsors");
//     return safaris;
// };

// const getById = async (id) => {
//     const [sponsor, err] = await db.query("SELECT * FROM sponsors WHERE id = ?", [id]);
//     if (!sponsor) {
//         return null;
//     }
//     return sponsor[0];
// };

// const add = async (data, user_id) => {
//     const [req, err] = await db.query("INSERT INTO sponsors (sponsor_name, description, sponsor_img, img_id) VALUES (?,?,?,?)", [data.sponsor_name, data.sponsor_img, data.img_id, user_id]);

//     if (!req) {
//         return null;
//     }
//     return getById(req.insertId);
// };

// const add = async (data, user_id) => {
//     try {
//         // Gérez le téléchargement de l'image avec Multer
//         const uploadPromise = new Promise((resolve, reject) => {
//             upload.single('sponsor_img')(data, null, function (err) {
//                 if (err instanceof multer.MulterError) {
//                     reject('Erreur lors du téléchargement de l\'image');
//                 } else if (err) {
//                     reject('Erreur interne du serveur lors du téléchargement de l\'image');
//                 } else {
//                     resolve(data.file);
//                 }
//             });
//         });

//         // Attendre la résolution de la promesse pour récupérer le nom du fichier
//         const filename = await uploadPromise;

//         // Ajoutez le sponsor avec le lien de l'image dans la base de données
//         const [result, err] = await db.query("INSERT INTO sponsors (sponsor_name, description, sponsor_img, img_id) VALUES (?,?,?,?)", [data.sponsor_name, data.description, getImageUrl(filename), user_id]);

//         if (!result) {
//             return null;
//         }

//         return getById(result.insertId);
//     } catch (error) {
//         console.error(error);
//         return null;
//     }
// };

// const update = async (id, data) => {
//     const sponsor = await getById(id);
//     if (!sponsor) {
//         return null;
//     } else {
//         const [req, err] = await db.query("UPDATE sponsors SET sponsor_name = ?, description = ?, sponsor_img = ? WHERE id = ? LIMIT 1", 
//         [
//             data.sponsor_name || sponsor.sponsor_name, 
//             data.description || sponsor.description,
//             data.sponsor_img || sponsor.sponsor_img,
//             id
//         ]);

//         return getById(id);
//     }
// };

// const remove = async (id) => {
//     const [req, err] = await db.query("DELETE FROM sponsors WHERE id = ? LIMIT 1", [id]);
//     if (!req) {
//         return false;
//     }
//     return true;
// };




const getAll = async () => {
    const [sponsors, err] = await db.query("SELECT * FROM sponsors");
    return sponsors;
};

const getById = async (id) => {
    const [sponsor, err] = await db.query("SELECT * FROM sponsors WHERE id = ?", [id]);
    if (!sponsor) {
        return null;
    } else {
        return sponsor[0];
    }
};

const add = async (data) => {
    const [req, err] = await db.query("INSERT INTO sponsors (name, description, logo) VALUES (?,?,?)", [data.name, data.description, data.logo]);

    if (!req) {
        return err;
    } else {
        return true;
    }
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
    } else {
        return true;
    }
};


module.exports = {
    getAll,
    getById,
    add,
    update,
    remove
};