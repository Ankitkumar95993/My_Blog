
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');


// Connect to MongoDB database using Mongo Atlas connection string.
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log('db connection successful'))
.catch((error)=>{
    console.log('db connection not successful');
    console.error(error);
    process.exit(1);
});

const app = express();
app.use(express.json());

app.listen(3000,()=>{
    console.log('app is running at port 3000');
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
