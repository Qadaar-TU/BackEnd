export function filterCitiesByPopulation(paramArray) {
  // Verwende die filter-Methode, um ein Array mit Städten zu erstellen, die mehr als 100.000 Einwohner haben
  const filteredCities = paramArray.filter((city) => city.population > 100000);

  return filteredCities;
}
