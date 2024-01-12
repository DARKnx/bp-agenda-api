import { Router } from "express";

import HistoricController from "../../resources/historic/historic.controllers.ts";
import auth from '../../middlewares/auth.ts'

const service = new HistoricController();
const historicRouter = Router();

historicRouter.get("/get-all", auth, service.getAll);

export default historicRouter;