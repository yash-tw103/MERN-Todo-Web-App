const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./dbConnection');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

connectDb();
require('dotenv').config();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//setting routes
app.use('/', require('./routes/todoRoutes'));


const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log('Server is running on the port ', PORT);
})