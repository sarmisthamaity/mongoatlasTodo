require('dotenv').config();
const Jwt = require('jsonwebtoken');
module.exports.createToken = (Id) => {
    return Jwt.sign(Id.toJSON(),
        process.env.SERECTKEY);
};