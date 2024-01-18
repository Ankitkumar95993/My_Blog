
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log('db connection successful'))
.catch((error)=>{
    console.log('db connection not successful');
    console.error(error);
    process.exit(1);
});

const app = express();
// app.use(express.json());

app.listen(3000,()=>{
    console.log('app is running at port 3000');
});