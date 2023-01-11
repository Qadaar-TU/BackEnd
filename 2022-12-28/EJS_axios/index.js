const axios = require("axios");
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use((req, _, next) => {
  console.log("neue request", req.url, req.method); //damit wir wissen was für eine request reinkommt und um es in der console zu sehen
  next();
});

app.use(express.static("public")); //heisst: die dateien in dem ordner sind statisch....gegenteil von views wo dynamische dateien drin sind

// ========================================================

const api =
  "https://api.themoviedb.org/3/movie/550?api_key=9b0670deeef7bd2e733bde41fb5dca15";

app.get("/", (_, res) => {
  axios //=fetch
    .get(api, {
      headers: { "Accept-Encoding": "application.json" }, //headers= egal welcher response vom fetch reinkommt,er versucht es als json anzuzeigen
    })
    .then((response) => {
      const movies = response.data.results; //die eingehenden daten vom fetch werden zwischengespeichert in "movies"
      res.render("home", { movies }); //response von zeile 20....im response wird die datei home gerendert(zeile6)...also nimm die daten von movies und rendere damit die seite "home.ejs"
    })
    .catch((err) => {
      console.log(err);
      res.sendFile(__dirname + "/public/server-error.html"); // ???
    });
});

// =======================================================
app.get("/discover/:genreID", (req, res) => {
  const genreID = req.params.genreID; /// ????
  axios
    .get(
      `https://api.themoviedb.org/3/movie/550?api_key=9b0670deeef7bd2e733bde41fb5dca15&with_genres=${genreID}`
    )
    .then((movie) => {
      const movies = movie.data.results;
      res.render("home", { movies });
    });
});

app.get("/search", (req, res) => {
  console.log(req.body);
  console.log(req.query.searchInput);
  axios
    .get(
      `https://api.themoviedb.org/3/movie/550?api_key=9b0670deeef7bd2e733bde41fb5dca15&language=de-DE&query=${req.query.searchInput}&include_adult=false`
    )
    .then((movie) => {
      const movies = movie.data.results;
      res.render("home", { movies });
    });
});

// not found
app.use((_, res) => {
  res.sendFile(__dirname + "/public/not-found.html");
});

const PORT = 9000;
app.listen(PORT, () => console.log("Server ready at Port", PORT));
