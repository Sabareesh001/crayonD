const sequelize = require('../config/sequelize')
const model = require('../models/model');
const express = require('express')
const app = express();
const productRoutes = require('../routes/productRoutes')
const productVariantsController = require('../routes/productVariantsRoutes')
const productCategoriesController = require('../routes/productCategoriesRoutes')

const cors = require('cors')
app.use(cors());
app.use('/api',productRoutes,productVariantsController,productCategoriesController);

app.listen(3000,()=>{
    console.log("App listens to port 3000")
})

sequelize.sync();