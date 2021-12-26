const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();


const authRouter = require('./routes/api/authRouter');
const adminRouter = require('./routes/api/adminRouter');
const shopkeeperRouter = require('./routes/api/shopkeeperRouter')
const dealerRouter = require('./routes/api/dealerRouter');
const representativeRouter = require('./routes/api/representativeRouter');



// database connection
require("./config/dbConnection");
const port = process.env.PORT;


app.use(cors())
app.use(express.json());


//routes 
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/shopkeeper', shopkeeperRouter);
app.use('/api/dealer', dealerRouter);
app.use('/api/representative', representativeRouter);


app.listen(port, err => {
    if (err) {
        console.log(`Unable to run server \n${err}`);
        return;
    }
    console.log(`Server is up and running on http://localhost:${port}`);
});