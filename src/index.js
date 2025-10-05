const express = require('express');
const { connectDB } = require('./db/index');
const { router } = require('./routes/products.routes');
const PORT = 8000;

//connect data
connectDB();
const app = express();
app.use(express.json());

//add routes
app.use('/api/product', router);
app.listen(PORT||3000,
    ()=>{
        console.log(`Server running at port ${PORT}`)
    }
)