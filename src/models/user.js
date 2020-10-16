import  baseModel from "../db/base"
import userSchema from "../db/userSchema"



export default class UserModel extends baseModel{
    constructor(){
        super();
        this.model = this.connection.define("users",userSchema)


    }

    create = async (user, bill) =>{

        try{
     const createbill = await this.model.create(user ,bill)
    
     return createbill

        } catch(error){
            console.log(error)
            throw error
    
        }
    }
    
  




}