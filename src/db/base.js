import Sequelize from "sequelize"

import sequelize from "./sequelize"

export default class baseModel{
constructor(){
    this.connection =sequelize;
}

} 