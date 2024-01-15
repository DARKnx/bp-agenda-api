import { Router } from "express";

import EventsController from "../../resources/events/events.controllers.ts";
import auth from '../../middlewares/auth.ts'

const service = new EventsController();
const eventsRouter = Router();

eventsRouter.post("/broker-schedule", auth, service.getBrokerSchedule);
eventsRouter.delete("/delete", auth, service.delete);
eventsRouter.post("/create", auth, service.create);
eventsRouter.get("/get-all", auth, service.getAll);
eventsRouter.put("/update", auth, service.update);
eventsRouter.get("/get", auth, service.get);

export default eventsRouter;