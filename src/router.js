import express from "express"

import {Router} from "express"

import user from "./routes/user"

const routes = new Router();


routes.use("/users",user)


routes.get("/",(req,res)=>{
    res.send("Welcome ")
})

export default routes;