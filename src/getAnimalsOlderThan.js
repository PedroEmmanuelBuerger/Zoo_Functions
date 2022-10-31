const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = data.species.find((Element) => Element.name === animal);
  return especie.residents.every((Element) => Element.age >= age);
}

module.exports = getAnimalsOlderThan;
