const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/star-wars-api')
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    name: String,
    climate: String,
    terrain: String,
    population: Number
});

const Planet = mongoose.model('Planets', planetSchema);

exports.createPlanet = data => {
    const planet = new Planet(data)
    return planet.save()
}