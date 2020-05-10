import { Router } from "express";
import routes from "./app/routes";

const route = Router();

route.use("/users", routes.user);

export default route;
