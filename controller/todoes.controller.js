const todosModel = require('../models/todos.model');

module.exports.collectionOfTodos = async(req, res) => {
    try{
        listofTodos = await todosModel.find({});
        console.log(listofTodos);
        return res.status(200).json({
            status: 200,
            message: listofTodos
        });
    }catch(err){
        console.log(err);
        return res.status(500).json({
            status: 500,
            error: err
        });
    };
};