const fs = require("fs");

// ============== die json erstmal einlesen/zugreifen mit data =============
fs.readFile("tayfun.json", (err, data) => {
  if (err) {
    console.log(err);
  }
  // =========== jetzt kommt buffer raus (ich habe console.log(data) gelöscht)==================
  //   ========umwandeln in string
  const string = data.toString("utf-8");
  console.log(string);
  //   ============jetzt wollen wir das ergebnis in ein txt datei schreiben=======
  //   fs.writeFile("tayfun.txt", string, (err) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     console.log("tayfun.txt wurde erstellt");
  //   });
  const replacegänzefüße = string.replace(/"/g, "");
  const replaceklammern = replacegänzefüße.replace(/{/g, "");
  const replaceandere = replaceklammern.replace(/}/g, "");
  const replacekomma = replaceandere.replace(/,/g, "");

  console.log(replacekomma);

  fs.writeFile("tayfun.txt", replacekomma, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("hat gefunzt");
  });
});
