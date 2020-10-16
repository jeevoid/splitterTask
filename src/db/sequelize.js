import Sequelize from "sequelize"
import config from "./config"
const sequelize = new Sequelize(
    config.DB_NAME,config.DB_USERNAME,config.DB_PASSWORD, {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  
    
})
sequelize
  .authenticate()
  .then(()=>{
      console.log("database connected");
  })
  .catch(err =>{
      console.log("unable to connect database")
  })


  export default sequelize