const express = require('express')
const router = express.Router();
const productCategoriesController = require('../controllers/productCategoriesController')

router.get('/productCategories',productCategoriesController.getCategories);


module.exports =  router;