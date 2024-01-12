import { Router } from "express";

import usersController from "../../resources/users/users.controllers.js";
import auth from '../../middlewares/auth.ts'

const service = new usersController();
const usersRouter = Router();

usersRouter.delete("/delete", auth, service.deleteUser);
usersRouter.get("/get-all", auth, service.getAllUser);
usersRouter.put("/update", auth, service.updateUser);
usersRouter.get("/get-user", auth, service.getUser);
usersRouter.post("/signup", service.signUp);
usersRouter.post("/signin", service.signIn);

export default usersRouter;