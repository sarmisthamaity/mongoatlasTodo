const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    cityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'towns'
    }
});

const userModel = new mongoose.model('populations', userSchema);

module.exports = userModel;