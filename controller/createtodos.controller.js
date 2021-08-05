const todosModel = require('../models/todos.model');

module.exports.createTodosList = async(req, res) => {
    try{
        const { text, assignedto, dueDate } = req.body;
    const listOfTodos = await new todosModel({
        text: text,
        assignedto: assignedto,
        dueDate: dueDate
    });
    const creatingTodos = await listOfTodos.save();
    console.log(creatingTodos, "jjjjjjjjjj");
    return res.status(200)
    .send({
        status: 200,
        message: creatingTodos
    })
    }catch(err){
        console.log(err);
        return res.status(500)
        .send({
            status: 500,
            error: err
        });
    };
};