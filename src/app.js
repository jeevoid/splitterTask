import express from "express";
const app  = express()
import cookieparser from "cookie-parser"

import  routes from "./router"
import middleware from "./middlewares/middleware"
middleware.default(app);
app.use(routes)

app.listen(3000,()=>{
    console.log("yayy! server started @", 3000)
})