require('dotenv').config();
const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://sarmi:Gouri@1434@cluster0.xt1qa.mongodb.net/todoapp?retryWrites=true&w=majority"

mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log(`dataBase connected succesfully! `);
}).catch((err) => {
    console.log(`message: ${err}`);
});

module.exports = mongoose;