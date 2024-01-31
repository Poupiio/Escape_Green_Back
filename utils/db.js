const mysql = require('mysql2/promise');
const config = require('../config');


const db = mysql.createPool({
    host: config.mysqlHost,
    user: config.mysqlUsername,
    password: config.mysqlPassword,
    database: config.mysqlDatabase
});


// Je l'exporte pour pouvoir le réutiliser dans d'autres fichiers sans avoir à rerentrer les identifiants de connexion
module.exports = db;