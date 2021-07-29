const mongoose = require('mongoose');
const citySchema = mongoose.Schema({
    cityName: {
        type: String,
        require: true
    },
    cityid: {
        type: Number,
        require: true
    }
});

const cityModel = new mongoose.model('towns', citySchema); 

module.exports = cityModel;