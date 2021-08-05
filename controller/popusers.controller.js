const userModel = require('../models/users.model');

module.exports.userCityDetails = async (req, res) => {
    try {
        const usersBelongsFrom = await userModel
            .findOne({ cityId: req.body.cityId }, { "_id": 0, "password": 0, "__v": 0 })
            .populate({
                path: "cityId",
                select: { "_id": 0, "__v": 0}
            });
        console.log(usersBelongsFrom);
        return res.status(200)
            .send(usersBelongsFrom);
    } catch (err) {
        console.log(err);
        res.send(err);
    };
};