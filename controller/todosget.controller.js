const todos = require('../models/todos.model');
const userModel = require('../models/users.model')
const cityModel = require('../models/city.model')

module.exports.getToDoEs = async (req, res) => {
    try {
        console.log(req.body.assignedto);
        const assignedTo = await todos
            .findOne({ assignedto: req.body.assignedto })
            .populate({
                path: 'assignedto', model: userModel,
                select: { 'password': 0 },
                populate: {
                    path: 'cityId',
                    model: cityModel
                }
            });
        console.log(assignedTo);
        return res.status(200).json({
            status: 200,
            message: assignedTo
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            error: err
        });
    };
};