const PlanetModel = require('../models/planets.model');

exports.insert = (req, res, next) => {
    if(req.body && req.body.name && req.body.climate && req.body.terrain && req.body.population){
        PlanetModel.createPlanet(req.body)
            .then(result => {
                res.status(201).send({id: result._id})
            })
            .catch(error => {
                error.status = 400
                next(error)
            })
    }else {
        const error = new Error("All fields name, climate, terrain and population are required.")
        error.status = 400;
        next(error)
    }
}

exports.getPlanetById = (req, res, next) => {
    PlanetModel.findById(req.params.planetId)
        .then(result => {
            res.status(200).send(result);
        }).catch(error => {
            error.status = 400
            next(error)
        })
}

exports.getPlanetByName = (req, res, next) => {
    PlanetModel.findByName(req.params.planetName)
        .then(result => {
            res.status(200).send(result);
        }).catch(error => {
            error.status = 400
            next(error)
        })
}

exports.getAllPlanets = (req, res, next) => {
    PlanetModel.index()
        .then(result => {
            res.status(200).send(result);
        }).catch(error => {
            error.status = 400
            next(error)
        })
}

exports.deletePlanet = (req, res, next) => {
    PlanetModel.delete(req.params.planetId)
        .then(result => {
            res.status(200).send({message: "Planet deleted with success"})
        }).catch(error => {
            error.status = 400
            next(error)
        })
}