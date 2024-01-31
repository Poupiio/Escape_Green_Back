const express = require('express');

const imageController = require('../controllers/image.controller');

const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        const images = await imageController.getAll();

        if (!images) {
            res.status(404).json({message: "Il n'y a aucune image disponible pour le moment."});
        } else {
            res.status(200).json(images);
        }

    })
;


module.exports = router;