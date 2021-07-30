const userModel = require('../models/users.model');

module.exports.allUsersData = async (req, res) => {
    const name = req.query.name;
    try {
        const oneUserData = await userModel
            .findOne({ userName: name },
                {
                    "userName": 1,
                    "email": 1,
                    "age": 1,
                    "cityId": 1
                });
        console.log(oneUserData, "oops");
        return res.status(200).send({
            message: oneUserData,
            status: 200
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: err,
            status: 500
        });
    };
};