// J'importe mes paquets NPM
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// J'importe les fichiers requis
const config = require('./config');
const routes = require('./routes');

// Création de mon serveur Express
const app = express();


// J'applique mes middlewares importés plus haut
app.use(morgan('dev'));
app.use(cors());
// Pour permettre à Express de parser le JSON envoyé dans le corps des requêtes
app.use(express.json());


// On applique notre router (situé dans routes/index.js) sur l'adresse "/api". Toutes nos routes seront donc de la forme : 
// "http://localhost/api/{entité}"
app.use(config.basePath, routes);


app.listen(config.port, () => {
    console.log('Server up on port ' + config.port);
});