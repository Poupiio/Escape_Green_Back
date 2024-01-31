const express = require('express');

const imagesController = require('../controllers/images.controller');

const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        const images = await imagesController.getAll();

        if (!images) {
            res.status(404).json({message: "Il n'y a aucune image disponible pour le moment."});
        } else {
            res.status(200).json(images);
        }

    })
;


module.exports = router;