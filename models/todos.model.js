const mongoose = require('mongoose');

const toDos = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    assignedto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "polpulations"
    },
    dueDate: {
        type: String,
        required: true
    }
});

module.exports = new mongoose.model('todos', toDos);

// module.exports = todosModel;