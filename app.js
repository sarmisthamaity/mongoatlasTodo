require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const connection = require('./connection/connect');
const routersR = require('./routes/index');

app.use('/', routersR);


app.listen(process.env.PORT, () => {
    console.log(`api is working ${process.env.PORT}`);
});