import Sequelize from "sequelize"

const userSchema={
    userexpenseId:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    userid:{
        type:Sequelize.STRING,
        primaryKey:true,
        autoIncrement:false,
        allowNull:false
    },
    Amount:{
        type:Sequelize.INTEGER,
        primaryKey:false,
        autoIncrement:false,
        allowNull:false

    },
    balanceAmounttobepaid:{
        type:Sequelize.INTEGER,
        primaryKey:false,
        autoIncrement:false,
        allowNull:false

    },
    balanceAmounttobepaid:{
        type:Sequelize.INTEGER,
        primaryKey:false,
        autoIncrement:false,
        allowNull:false

    },

}


export default userSchema;