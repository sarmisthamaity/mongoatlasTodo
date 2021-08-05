const userModel = require('../models/users.model');

module.exports.allUsersData = async (req, res) => {
    try {
        const { ageMoreThan, ageLessThan, cityId } = req.query;
        if (ageMoreThan) {
            const selectAgeMoreThan = await userModel.
                find({ age: { $gte: ageMoreThan } }, { 'password': 0 })
            console.log(selectAgeMoreThan, "PPPPPPPP");
            return res.send(selectAgeMoreThan);
        } else if (ageLessThan) {
            const selectAgeLessThan = await userModel
                .find({ age: { $lte: ageLessThan } } ,{'password': 0}
                )
            console.log(selectAgeLessThan, "PPPPPPPP");
            return res.send(selectAgeLessThan);
        } else {
            const usersCityId = await userModel.find()
            console.log(usersCityId, "xxxxxxxxx");
            return res.status(200).json({
                message: usersCityId,
                status: 200
            });
        }
    } catch (err) {
        console.log(err, "tttttttttttt");
        return res.status(500).send({
            message: err,
            status: 500
        });
    };
};