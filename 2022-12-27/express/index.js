const express = require("express");

const app = express();

app.use((req, _, next) => {
  console.log("neue request", req.url, req.method);
  next();
});

app.use(express.static("public"));

app.use((_, res) => {
  res.status(404).send("<h1>nichts gefunden tayfun</h1>");
});

const PORT = 3000;
app.listen(PORT, () => console.log("server listening on Port =>", PORT));
