const express = require('express');

const sponsorsController = require('../controllers/sponsors.controller');

const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        const sponsors = await sponsorsController.getAll();

        if (!sponsors) {
            res.status(404).json({message: "Il n'y a aucune société partenaire disponible pour le moment."});
        } else {
            res.status(200).json(sponsors);
        }

    })
;


module.exports = router;