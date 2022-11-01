const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pessoa = data.employees.find((element) => element.id === id);
  const animalId = pessoa.responsibleFor[0];
  const animal = data.species.find((element) => element.id === animalId);
  const older = animal.residents.reduce((a, b) => {
    if (a.age > b.age) { return a; }
    return b;
  });
  const { name, sex, age } = older;
  return [name, sex, age];
}
module.exports = getOldestFromFirstSpecies;
