const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const nome = data.species.map((Element) => Element.name);
    const quantidade = data.species.map((Element) => Element.residents.length);
    const obj = {};
    for (let i = 0; i < nome.length; i += 1) {
      obj[nome[i]] = quantidade[i];
    }
    return obj;
  }
  const result = data.species.find((Element) => Element.name === animal.specie);
  if (animal.sex === undefined) return result.residents.length;
  return result.residents.filter((Element) => Element.sex === animal.sex).length;
}
module.exports = countAnimals;
