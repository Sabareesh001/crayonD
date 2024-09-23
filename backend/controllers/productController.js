const product_variants = require("../models/product_variants");
const products = require('../models/products');

exports.getProducts = async (req, res) => {
    try {
        const response =  await products.findAll({
            include:product_variants 
        })
        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message:  error });
    }
};
