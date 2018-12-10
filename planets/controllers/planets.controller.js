const PlanetModel = require('../models/planets.model');

exports.insert = (req, res) => {
    PlanetModel.createPlanet(req.body)
        .then(result => {
            res.status(201).send({id: result._id})
        })
        .catch(error => {
            res.status(500).send({error});
        })
}

exports.getPlanetById = (req, res) => {
    PlanetModel.findById(req.params.planetId)
        .then(result => {
            res.status(200).send(result);
        })
}

exports.getPlanetByName = (req, res) => {
    PlanetModel.findByName(req.params.planetName)
        .then(result => {
            res.status(200).send(result);
        })
}

exports.getAllPlanets = (req, res) => {
    PlanetModel.index()
        .then(result => {
            res.status(200).send(result);
        })
}