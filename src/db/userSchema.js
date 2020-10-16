import Sequelize from "sequelize"

const userSchema={
    userId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:Sequelize.STRING,
        primaryKey:false,
        autoIncrement:false,
        allowNull:false
    },
    billamount:{
        type:Sequelize.INTEGER,
        primaryKey:false,
        autoIncrement:false,
        allowNull:false

    },


}


export default userSchema;