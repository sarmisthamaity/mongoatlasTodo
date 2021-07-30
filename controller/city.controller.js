const cityModel = require('../models/city.model');

module.exports.collectionOfCity = async (req, res) => {
    const { cityName } = req.body;
    console.log(req.body);
    try {
        const existingCity = await cityModel.findOne({ cityName: cityName });
        if (existingCity) {
            return res.status(202).send({
                message: existingCity,
                status: 202
            });
        } else {
            const newCityCollection = await new cityModel({
                cityName: cityName
            });
            const saveCitiesCollections = await newCityCollection.save();
            console.log(saveCitiesCollections);
            return res.status(200).send({
                message: saveCitiesCollections,
                status: 200
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: err,
            status: 500
        });
    };
};


// module.exports = collectionOfCity;