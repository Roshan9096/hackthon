const mongoose = require('mongoose');
require('dotenv').config({path:'.../.env'});

connectDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`); //connect to database
        console.log("Database connected successfully")
    } catch (e) {
        console.log("error while connecting to database",e);
    }
   
}

module.exports={
    connectDB
}