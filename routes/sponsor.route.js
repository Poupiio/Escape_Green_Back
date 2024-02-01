const express = require('express');

const sponsorController = require('../controllers/sponsor.controller');
const sponsorSchema = require('../models/sponsor');
const validator = require('../utils/validator');
const authValidator = require('../utils/auth');

const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        const sponsors = await sponsorController.getAll();

        if (!sponsors) {
            res.status(404).json({message: "Il n'y a aucune société partenaire disponible pour le moment."});
        } else {
            res.status(200).json(sponsors);
        }
    })
    .put(async (req, res) => {
        const new_sponsor = await sponsorController.add(req.body);

        if (!new_sponsor) {
            res.status(404).json({message: "Raté."});
        } else {
            res.status(201).json({message: "Nouveau partenaire ajouté avec succès !"});
        }
    })
;

router.route('/:id')
    .get(async (req, res) => {
        const sponsor = await sponsorController.getById(req.params.id);

        if (!sponsor) {
            res.status(404).json();
        } else {
            res.status(200).json(sponsor);
        }
    })
    .patch(async (req, res) => {
        const sponsor = await sponsorController.getById(req.params.id);

        if (!sponsor) {
            res.status(404).json();
        } else {
            const updated_sponsor = await sponsorController.update(req.params.id, req.body);
            if (!updated_sponsor) {
                res.status(404).json({message: "Un problème est survenu lors de la modification du sponsor."});
            } else {
                res.status(202).json({message: "Le sponsor a bien été modifié comme ceci :" + updated_sponsor});
            }
        }
    })
    .delete(async (req, res) => {
        const sponsor = await sponsorController.remove(req.params.id);
        if (!sponsor) {
            res.status(404).json({message: "Un problème est survenu lors de la suppression."});
        } else {
            res.status(202).json({message: "Entreprise partenaire supprimée !"});
        }
    })
;

module.exports = router;