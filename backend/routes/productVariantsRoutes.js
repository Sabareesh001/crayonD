const productVariantsController = require('../controllers/productVariantsController.js')
const express = require('express')
const router = express.Router();

router.get(`/productVariants/:productId`,productVariantsController.getVariants)


module.exports =  router;
