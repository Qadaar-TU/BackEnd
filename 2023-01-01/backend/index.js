const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

//logging middleware (kein endpunkt)
app.use((req, _, next) => {
  console.log("new request", req.url, req.method);
  next();
});

//route von den daten (endpunkt)
app.get("/api/todo", (_, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

const PORT = 5500;
app.listen(PORT, () => console.log("server listening on Port", PORT));
