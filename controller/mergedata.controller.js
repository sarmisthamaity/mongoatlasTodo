const userModel = require('../models/users.model');
const cityModel = require('../models/city.model');

module.exports.dataFormateOfDatas = async (req, res) => {
    const commonCityId = req.params.id;
    try {
        const mergeUserData = await userModel.findOne({ cityId: commonCityId });
        const mergeCityData = await cityModel.findOne({ cityid: commonCityId });
        const mergeData = {
            name: mergeUserData.userName,
            email: mergeUserData.email,
            age: mergeUserData.age,
            cityId: mergeUserData.cityId,
            city: [{
                cityName: mergeCityData.cityName,
                cityid: mergeCityData.cityid
            }]
        };
        console.log(mergeData);
        return res.status(200).send({
            message: mergeData,
            status: 200
        });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: err,
            status: 500
        });
    };
};