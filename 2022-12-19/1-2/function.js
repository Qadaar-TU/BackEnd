import { names, numbers } from "./data.js";

// export const firstArrayName = () => {
//   return names[0];
// };
// //hier geben wir Eric raus und ist damit
// // gelöscht weil er ein neues array rausgibt

// let x = names.pop();
// export const notLastElement = () => {
//   return names;
// };

// export const onlyLastElement = () => {
//   //mit .length -1 kriegt man das letzte element raus !!
//   return names[names.length - 1];
// };

// export const allButNotFirst = () => {
//   //slice schneidet das Element vor der eingegebenen Zahl
//   return names.slice(1);
// };

export const numberDouble = () => {
  //damit der ursprüngliche Array nicht verändert wird. wir speichern numbers in newArray und bearbeiten dann newArray
  let newArray = [...new Set(numbers)];
  return newArray;
};

export const alleZusammen = () => {
  let sum = 0;

  for (let index = 0; index < numbers.length; index++) {
    sum += numbers[index];
    console.log(numbers[index]);
  }
  return sum;
};

// ================== Nächste Seite =======================

export let testFunction = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export function capitalizeFirstLetter(pupu) {
  return pupu.toUpperCase();
}

export function checkLastLetter(str, letter) {
  // Hole den letzten Buchstaben von str
  const lastLetter = str[str.length - 1];

  // Vergleiche den letzten Buchstaben von str mit dem Parameter letter
  if (lastLetter === letter) {
    return true;
  } else {
    return false;
  }
}
