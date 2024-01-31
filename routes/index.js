const express = require('express');

// J'importe tous mes fichiers route.js contenus dans le dossier "routes"
const userRoute = require('./user.route');
const servicesRoute = require('./services.route');
const sponsorsRoute = require('./sponsors.route');
const imagesRoute = require('./images.route');


// J'importe le Routeur Express
const router = express.Router();

// Je pointe chaque entité vers sa sous-route :
// "http://localhost/api/users"
router.use('/users', userRoute);

// "http://localhost/api/services"
router.use('/services', servicesRoute);

// "http://localhost/api/sponsors"
router.use('/sponsors', sponsorsRoute);

// "http://localhost/api/images"
router.use('/images', imagesRoute);


// J'exporte le router pour le rendre accessible en faisant un require de tout ce fichier
module.exports = router;