const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length <= 0) return [];
  if (ids.length === 1) {
    const result = data.species.find((Element) => Element.id === ids[0]);
    return [result];
  }
  const result = ids.map((Element) => data.species.find((Elements) => Elements.id === Element));
  return result;
}

module.exports = getSpeciesByIds;
