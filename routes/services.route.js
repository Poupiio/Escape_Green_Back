const express = require('express');

const servicesController = require('../controllers/services.controller');

const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        const services = await servicesController.getAll();

        if (!services) {
            res.status(404).json({message: "Il n'y a aucune service disponible pour le moment."});
        } else {
            res.status(200).json(services);
        }

    })
;

module.exports = router;