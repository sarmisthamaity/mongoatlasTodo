const userModel = require('../models/users.model');

module.exports.getUserById = async (req, res) => {
    try {
        const userDataById = await userModel
            .findOne({ _id: req.body._id },
                { 'password': 0, '__v': 0 });
        console.log(userDataById);
        return res.status(200)
            .json({
                status: 200,
                message: userDataById
            });
    } catch (err) {
        console.log(err);
        return res.status(500)
            .json({
                status: 500,
                message: err
            })
    };
};