const PlanetModel = require('../models/planets.model');

exports.insert = (req, res) => {
    PlanetModel.createPlanet(req.body)
        .then(result => {
            res.status(201).send({id: result._id})
        })
        .catch(error => {
            res.status(500).send({error})
        })
}