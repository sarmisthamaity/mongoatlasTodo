const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
    cityName: {
        type: String,
        require: true
    }
});

const cityModel = new mongoose.model('towns', citySchema); 

module.exports = cityModel;