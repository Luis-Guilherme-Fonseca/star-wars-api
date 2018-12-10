const PlanetsController = require('./controllers/planets.controller');

exports.routesConfig = (app) => {
    app.post('/createplanet', [PlanetsController.insert]);
    app.get('/planets/:planetId', [PlanetsController.getPlanetById]);
}