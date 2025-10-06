const express = require('express');
const { connectDB } = require('./db/index');
const { router } = require('./routes/products.routes');
require('dotenv').config({
    path:'../.env'
});

//connect data
connectDB();
const app = express();
app.use(express.json());

//add routes
app.use('/api/product', router);
app.listen(process.env.PORT||3000,
    ()=>{
        console.log(`Server running at port ${process.env.PORT} || 3000`)
    }
)