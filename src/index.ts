import express from "express";

const server = express();

server.get("/", (req, res) => {
  console.log(req.url);
  return res.send("ok");
});

server.listen(3000, () => {
  console.log("Server running");
});
