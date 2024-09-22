const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const products = sequelize.define(
    'products',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        img_url:{
            type:DataTypes.TEXT,
        }
        
    },
    {
        timestamps:true
    }
)

module.exports = products;

