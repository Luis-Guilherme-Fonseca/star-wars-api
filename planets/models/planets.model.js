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

exports.findById = id => {
    return Planet.findById(id).then(result => {
        result = result.toJSON();
        delete result._id;
        delete result.__v;
        return result
    })
}

exports.findByName = name => {
    return Planet.findOne({name:{$eq: name}})
        .then(result => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result
        })
}

exports.index = () => {
    return new Promise((resolve, reject) => {
        Planet.find()
            .exec((err, planets) => {
                if(err){
                    reject(err)
                }else{
                    resolve(planets)
                }
            })
    })
}

exports.delete = (id) => {
    return Planet.remove({_id: id}, err => {
            if(err){
                return err
            }
        })
}