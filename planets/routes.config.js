const PlanetsController = require('./controllers/planets.controller');

exports.routesConfig = (app) => {
    app.post('/createplanet', [PlanetsController.insert]);
    app.get('/planets/:planetId', [PlanetsController.getPlanetById]);
    app.get('/planets/name/:planetName', [PlanetsController.getPlanetByName]);
    app.get('/planets/', [PlanetsController.getAllPlanets]);
    app.delete('/planets/:planetId', [PlanetsController.deletePlanet])

    app.use((req, res, next) => {
        const error = new Error("Not Found");
        error.status = 404;
        next(error)
    })
}