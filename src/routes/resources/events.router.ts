import { Router } from "express";

import EventsController from "../../resources/events/events.controllers.ts";
import auth from '../../middlewares/auth.ts'

const service = new EventsController();
const eventsRouter = Router();

eventsRouter.delete("/delete", service.delete);
eventsRouter.post("/create", service.create);
eventsRouter.get("/get-all", service.getAll);
eventsRouter.put("/update", service.update);
eventsRouter.get("/get", service.get);

export default eventsRouter;