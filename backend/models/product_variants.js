const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const product_variants = sequelize.define(
    'variants',
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
        tableName:'product_variants',
        timestamps:true
    }
)

module.exports = product_variants;