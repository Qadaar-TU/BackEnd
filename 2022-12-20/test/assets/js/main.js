console.log("hallo");

if (!(5 > 2)) {
  console.log("5 ist nicht größer als 2");
}
console.log(2);

let isTrue = true;
if (!isTrue) {
  console.log("isTrue ist false");
}

let x;
if (!x) {
  console.log("x ist undefined");
} else {
  console.log("x hat einen Wert");
}

let arr = [];
if (!arr.length) {
  console.log("arr ist leer");
} else {
  console.log("arr ist nicht leer");
}

let userInput = "hello";
if (!userInput) {
  console.log("Es wurde keine Eingabe gemacht");
} else {
  console.log(`Die Eingabe lautet: ${userInput}`);
}

if (!5 > 2) {
  console.log("5 ist größer als 2");
} else {
  console.log("5 ist nicht größer als 2");
}
