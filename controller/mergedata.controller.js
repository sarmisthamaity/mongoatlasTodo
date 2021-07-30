const userModel = require('../models/users.model');
const cityModel = require('../models/city.model');

module.exports.dataFormateOfDatas = async (req, res) => {
    const commonCityId = req.params.id;
    try {
        const mergeUserData = await userModel.findOne({ cityId: commonCityId });
        const mergeCityData = await cityModel.findOne({ cityid: commonCityId });
        return res.status(200).send({
            status: 200,
            name: mergeUserData.userName,
            email: mergeUserData.email,
            age: mergeUserData.age,
            city: {
                cityName: mergeCityData.cityName,
                cityid: mergeCityData.cityid
            }
        });
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message: err,
            status: 500
        });
    };
};