const fs = require("fs");
const http = require("http");

function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, dataBuffer) => {
      if (err) {
        reject(err);
      } else {
        resolve(dataBuffer);
      }
    });
  });
}

const Server = http.createServer((request, response) => {
  console.log("neue request", request.url, request.method);

  const resource = request.url === "/" ? "/home" : request.url;

  const filePath = resource.includes(".")
    ? `assets${resource}`
    : `assets${resource}.html`;

  readFile(filePath)
    .then((dataBuffer) => response.write(dataBuffer))
    .catch(() => response.write("<h1> Fehler morruk <h1>"))
    .finally(() => response.end());
});

const PORT = 8500;
Server.listen(PORT, () => ("Server listening on Port", PORT));
