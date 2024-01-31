// Au lieu du paquet mysql, on utilise mysql2
// (npm i mysql2), qui fonctionne presque pareil, mais 
// permet d'utiliser "async / await" sur les requêtes
const mysql = require('mysql2/promise');
const config = require('../config');

// Idem : avec mysql2, on fait createPool au lieu de
// createConnection. On met les informations de connexion
// de notre serveur MySQL.
const db = mysql.createPool({
    host: config.mysqlHost,
    user: config.mysqlUsername,
    password: config.mysqlPassword,
    database: config.mysqlDatabase
});

// On exporte db. Dans chaque fichier, on pourra appeler
// db en faisant un require('utils/db') pour bénéficier de cette connexion,
// sans avoir à retaper partout les identifiants de connexion
module.exports = db;
