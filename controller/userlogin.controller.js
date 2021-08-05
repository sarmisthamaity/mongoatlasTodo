const userModel = require('../models/users.model');
const bycrypt = require('bcrypt');
const authToken = require('../middleware/createtoken');

module.exports.userLogin = async (req, res) => {
    const { email, password, cityId, _id } = req.body;
    console.log(req.body);
    try {
        const oneUser = await userModel.findOne({ email: email })
        const checkHashPassword = await bycrypt.compare(password, oneUser.password);
        if (checkHashPassword) {
            const createtoken = await authToken.createToken(oneUser._id);
            console.log(`login Succesfully`);
            return res.status(200)
                .send({
                    message: 'login Succesfully',
                    status: 200
                });
        } else {
            return res.status(300)
                .send({
                    message: 'password is wrong',
                    status: 300
                });
        };
    } catch (err) {
        console.log(err);
        return res.status(500)
            .send({
                message: err,
                status: 500
            });
    };
};