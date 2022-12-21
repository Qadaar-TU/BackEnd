import { arrayNumbers, arrayCars } from "./data.js";

export const sortFunction = () => {
  return arrayNumbers.sort((a, b) => a - b);
};

export const sortCars = () => {
  return arrayCars.sort();
};
