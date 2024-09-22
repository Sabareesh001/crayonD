const product_category_master = require('../models/product_category_master')

exports.getCategories = async(req,res)=>{
       const response = await product_category_master.findAll();

       res.send(response)
}