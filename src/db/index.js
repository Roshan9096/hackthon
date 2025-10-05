const mongoose = require('mongoose');
const uri = "mongodb+srv://roshanthorat877_db_user:jlf13hfZb2ehkhEM@cluster0.njjoyks.mongodb.net";

connectDB = async()=>{
    try {
        await mongoose.connect(uri); //connect to database
        console.log("Database connected successfully")
    } catch (e) {
        console.log("error while connecting to database",e);
    }
   
}

module.exports={
    connectDB
}