const product_variants = require('../models/product_variants')
const products = require('../models/products')
exports.getVariants = async(req,res)=>{
    const productId = req.params.productId
    const productDetails = await products.findOne({
        where:{
            id:productId
        }
    }) 
    const variantsDetails =  await product_variants.findAll({
        where:{
            productId:productId
        }
    })
    res.send({product:productDetails,variants:variantsDetails})
}