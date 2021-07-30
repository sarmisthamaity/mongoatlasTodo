require('dotenv').config();
const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://sarmi:Gouri@1434@cluster0.xt1qa.mongodb.net/todoapp?retryWrites=true&w=majority"

mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Successfully Established Connection with MongoDB`);
}).catch((err) => {
    console.log(`Failed to Establish Connection with MongoDB with Error: ${err.message}`);
});

module.exports = mongoose;