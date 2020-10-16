import route from "../routes/route"
import UserModel from "../models/user"




export const addbill = route(async(req,res)=>{

try{
    const{ username ,
        billamount      
            }= req.body;
            console.log(username,billamount)
    
            const userdb = new UserModel
     const  addbillamount = await userdb.create(username,billamount)
     
            res.json(addbillamount)
}
catch(error){
 console.log(error)
    throw error
}


})