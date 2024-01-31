const express = require('express');

const serviceController = require('../controllers/service.controller');

const router = express.Router();


router.route('/')
    .get(async (req, res) => {
        const services = await serviceController.getAll();

        if (!services) {
            res.status(404).json({message: "Il n'y a aucune service disponible pour le moment."});
        } else {
            res.status(200).json(services);
        }
    })
    .put(async (req, res) => {
        const new_service = await serviceController.add(req.body);

        if (!new_service) {
            res.status(404).json({message: "Raté."});
        } else {
            res.status(201).json({message: "Nouveau service ajouté avec succès !"});
        }
    })
;

router.route('/:id')
    .get(async (req, res) => {
        const service = await serviceController.getById(req.params.id);

        if (!service) {
            res.status(404).json();
        } else {
            res.status(200).json(service);
        }
    })
    .patch(async (req, res) => {
        const service = await serviceController.getById(req.params.id);

        if (!service) {
            res.status(404).json();
        } else {
            const updated_service = await serviceController.update(req.params.id, req.body);
            if (!updated_service) {
                res.status(404).json({message: "Un problème est survenu lors de la modification du service."});
            } else {
                res.status(202).json({message: "Le service a bien été modifié comme ceci :" + updated_service});
            }
        }
    })
    .delete(async (req, res) => {
        const service = await serviceController.remove(req.params.id);
        if (!service) {
            res.status(404).json({message: "Un problème est survenu lors de la suppression."});
        } else {
            res.status(202).json({message: "Service supprimé !"});
        }
    })
;

module.exports = router;