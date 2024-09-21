const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = sequelize.define(
    'User',
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
        
    },
    {
        timestamps:false
    }
)

User.sync();


module.exports = User;

