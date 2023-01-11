const fs = require("fs");
const http = require("http");

//readfile function wiederverwendbar
function respondWithFile(fileName, response) {
  fs.readFile(fileName, (err, dataBuffer) => {
    if (err) {
      response.end("<h1>Fehler</h1>");
    }
    const fileString = dataBuffer.toString();
    response.write(fileString);
    response.end();
  });
}

//kompletter server und was er macht
const server = http.createServer((request, response) => {
  console.log("neue request", request.url, request.method);

  if (request.url === "/" || request.url === "/home") {
    respondWithFile("assets/index.html", response);
  } else if (request.url === "/about") {
    respondWithFile("assets/about.html", response);
  } else if (request.url === "/contact") {
    respondWithFile("assets/contact.html", response);
  } else if (request.url === "/faq") {
    respondWithFile("assets/faq.html", response);
  } else {
    response.end("<h1>404 not Found</h1>");
  }
});

const PORT = 9000;
server.listen(PORT, () => console.log("Server listening on Port", PORT));
