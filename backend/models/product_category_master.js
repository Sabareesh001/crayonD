const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const product_category_master = sequelize.define(
    'product_category_master',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        is_active:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        },
        
    },
    {
        timestamps:true
    }
)

module.exports = product_category_master;

