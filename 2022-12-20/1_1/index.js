const fs = require("fs");

// ===================== DATEI ASYNCRON ERSTELLEN  mit fs.writefile========================

fs.writeFile("blog1.txt", "Hallo elvira warum so spät", (err) => {
  if (err) {
    console.log("DU hast ein großen Fehler gemacht !");
  }
  console.log("blog1.text erfolgreich angelegt habibi");
});

fs.writeFile("blog2.txt", "das ist die zweite Aufgabe", (err) => {
  if (err) {
    console.log("oh noooo");
  }
  console.log("du bist der superhacker");
});

// ================= ORDNER ERSTELLEN mit fs.mkdir (make-directory)===========================
// fs.mkdir("./assets", (err) => {
//   if (err) {
//     console.log("alter was machst du denn !!");
//   }
//   console.log("Yeah, neuen Ordner erstellt");
// });

// ==================== ORDNER LÖSCHEN mit fs.rmdir (remove-directory)===================

// fs.rmdir("./assets", (err) => {
//   if (err) {
//     console.log("Fehlerhafte eingabe");
//   }
//   console.log("Der ordner wurde gelöscht");
// });

// ==================== Datei erstellen und dann wieder löschen mit fs.unlink========================

// fs.writeFile("delete.txt", "ich werde sowieso wieder gelöscht, mist", (err) => {
//   if (err) {
//     console.log("nooooooo falsch");
//   }
//   console.log("yes das erstellen hat gefunzt");
// });

fs.unlink("delete.txt", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("top mann");
});

fs.writeFile("Hello.txt", "..jaja wunderbar", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("hat geklappt");
});

// ================================== datei umbenennen mit fs.rename =====================
fs.rename("Hello.txt", "HelloWorld.txt", (err) => {});



