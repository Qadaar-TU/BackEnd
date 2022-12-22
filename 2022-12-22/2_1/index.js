const fs = require("fs");
const http = require("http");

function respondWithFile(fileName, response) {
  fs.readFile(fileName, (err, dataBuffer) => {
    if (err) {
      return response.end("<h1>Fehler auf dem Server</h1>");
    }
    const fileString = dataBuffer.toString();
    response.write(fileString);
    response.end();
  });
}

const server = http.createServer((request, response) => {
  console.log("neue request", request.url, request.method);

  switch (request.url) {
    case "/home":
      respondWithFile("assets/home.html", response);
      break;
    case "/contact":
      respondWithFile("assets/contact.html", response);
      break;
    case "/faq":
      respondWithFile("assets/faq.html", response);
      break;
    case "/about":
      respondWithFile("assets/about.html", response);
      break;
    case "/style.css":
      respondWithFile("./assets/style.css", response);
      break;
    default:
      response.end("<h1>404 Not found<h1>");
  }
});

const PORT = 9001;
server.listen(PORT, () => console.log("server listening on Port", PORT));
