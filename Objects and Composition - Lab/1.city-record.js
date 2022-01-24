function cityRecord(name, population, treasury) {
  const city = {};
  city.name = name;
  city.population = population;
  city.treasury = treasury;

  return city;
}

console.log(cityRecord("Tortuga", 7000, 15000));

// function cityRecord(name, population, treasury) {
//     return {
//       name,
//       population,
//       treasury
//     };
//   }

console.log(cityRecord("Tortuga", 7000, 15000));
