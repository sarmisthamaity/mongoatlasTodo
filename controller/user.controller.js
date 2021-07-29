const Joi = require('joi');
const bycrypt = require('bcrypt');
const userModel = require('../models/users.model');

const salt = 12
module.exports.usersData = async (req, res) => {
    const { userName, email, password, age, cityId } = req.body;
    console.log(req.body);
    const joiSchema = Joi.object().keys({
        userName: Joi.
            string()
            .min(3)
            .max(16)
            .required(),
        email: Joi.
            string()
            .min(10)
            .max(25)
            .email()
            .required(),
        password: Joi
            .string()
            .alphanum()
            .min(5)
            .max(15)
            .required(),
        age: Joi
            .number()
            .integer()
            .min(15)
            .max(99)
            .required(),
        cityId: Joi.
            number()
            .integer()
            .max(100)
            .min(1)
    });
    const joiUserDataValidate = joiSchema.validate(req.body);
    if (joiUserDataValidate.error) {
        return res.status(300).send({
            message: joiUserDataValidate.error.details[0].message,
            status: 300
        });
    } else {
        value = joiUserDataValidate.value;
    };
    const lengthOfDatas = await userModel.find();
    const hashPassword = await bycrypt.hash(password, salt);
    console.log(hashPassword);
    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(202).send({
                message: "email is already exists",
                status: 202
            });
        } else {
            const newUsers = new userModel({
                userName: userName,
                email: email,
                password: hashPassword,
                age: age,
                cityId: lengthOfDatas.length + 1
            });
            const saveNewUser = await newUsers.save();
            console.log(saveNewUser);
            return res.status(200).send({
                message: saveNewUser,
                status: 200
            });
        };
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: err,
            status: 500
        });
    };
};