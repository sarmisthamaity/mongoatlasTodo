const cityModel = require('../models/city.model');

module.exports.getNumberOfCities = async (req, res) => {
    try {
        const totalNumberOfTowns = await cityModel.find();
        console.log(totalNumberOfTowns);
        return res.status(200).send({
            message: totalNumberOfTowns,
            status: 200
        })
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: err,
            status: 500
        });
    };
};