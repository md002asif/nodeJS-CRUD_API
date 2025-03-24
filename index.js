const express = require('express');
const app = express();
const mongoose = require('mongoose');
const empRoute = require('./routers/employee.routers');
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

app.use('/api/employeedetails',empRoute);

app.listen(3000, () =>
{
    console.log("Port 3000 is running");
})

mongoose.connect(process.env.MONGO_CONNECTION_EMPLOYEE)
.then(() =>{
    console.log('connected to MongoDB');
})
.catch((err) =>
{
    console.log('connection failed',err);
})
