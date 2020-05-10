import express, { Express } from "express";
import "reflect-metadata";
import bodyparser from "body-parser";
import routes from "./routes";

export class App {
  express: Express;
  constructor() {
    this.express = express();
    this.middlewares();
    // this.initializeDB();
    this.routes();
  }

  middlewares() {
    this.express.use(bodyparser.json({ limit: "5mb" }));
    this.express.use(bodyparser.urlencoded({ extended: false }));
  }

  routes() {
    this.express.use(routes);
    //TO DO - create Routes file
  }

  initializeDB() {
    //TO DO - connection manager
  }
}
