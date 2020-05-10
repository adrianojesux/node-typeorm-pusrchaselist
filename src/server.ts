import { App } from "./App";

const AppServer = new App().express;

AppServer.listen(process.env.PORT || 3000);

console.log("ok show");
