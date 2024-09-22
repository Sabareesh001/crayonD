const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const product_variants = sequelize.define(
    'product_variants',
    {
   
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        is_active:{
            type:DataTypes.BOOLEAN,
        },
        price:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
        }
        
    },
    {
        timestamps:true
    }
)

module.exports = product_variants;

