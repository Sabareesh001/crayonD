const product_variants = require("../models/product_variants");
const products = require('../models/products');

exports.getProducts = async (req, res) => {
    try {
        const fetched_products = await products.findAll();

        // Map through the products and fetch their variants asynchronously
        const response = await Promise.all(fetched_products.map(async (data) => {
            const curr_product_variants = await product_variants.findAll({
                where: {
                    productId: data.id
                }
            });
            console.log(curr_product_variants)
            return {
                product: data,
                variants: curr_product_variants
            };
        }));

        // Send the response once all the promises are resolved
        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error fetching products" });
    }
};
