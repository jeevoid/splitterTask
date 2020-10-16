import express from "express"
import {Router} from "express"


const routes = new Router();

import {addbill} from "../controllers/user"

routes.post("/addbill",addbill)


export default routes;