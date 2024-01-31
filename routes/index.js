const express = require('express');

// J'importe tous mes fichiers route.js contenus dans le dossier "routes"
const userRoute = require('./user.route');
const serviceRoute = require('./service.route');
const sponsorRoute = require('./sponsor.route');
const imageRoute = require('./image.route');


// J'importe le Routeur Express
const router = express.Router();

// Je pointe chaque entité vers sa sous-route :
// "http://localhost/api/users"
router.use('/users', userRoute);

// "http://localhost/api/services"
router.use('/services', serviceRoute);

// "http://localhost/api/sponsors"
router.use('/sponsors', sponsorRoute);

// "http://localhost/api/images"
router.use('/images', imageRoute);


// J'exporte le router pour le rendre accessible en faisant un require de tout ce fichier
module.exports = router;