import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  return res.send("Usuarios");
});

export = route;
