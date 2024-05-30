import { Router } from "express";
import dataController from "./controllers/dataController.js";
import { validateData } from "./middlewares/validate-body.js";

const routes = Router()

routes.post('/search', validateData, dataController.search)


export { routes }