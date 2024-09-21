const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('crayond','sabareesh','sabareesh',{
    host:'localhost',
    dialect:'mysql'
});


const checkConnection = async()=>{
    try {
        await sequelize.authenticate();
        console.log("Connected to Database")
          
      } catch (error) {
          console.log(error);
      }
}

checkConnection();


module.exports = sequelize;

