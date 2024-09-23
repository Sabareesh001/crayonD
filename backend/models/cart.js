const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const cart = sequelize.define(
    'cart',
    {
        quantity:{
             type:DataTypes.INTEGER,
            allowNull:false
        },
        total_price:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false,
        }
    },
    {
        timestamps:true
    }
)

module.exports = cart;