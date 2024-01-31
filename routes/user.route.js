const express = require('express');

const userController = require('../controllers/user.controller');

const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        const user = await userController.getAll();

        if (!user) {
            res.status(404).json({message: "Il n'y a aucun utilisateur disponible pour le moment."});
        } else {
            res.status(200).json(user);
        }

    })
;

module.exports = router;