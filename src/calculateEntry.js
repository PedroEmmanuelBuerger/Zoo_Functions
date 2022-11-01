const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const result = entrants.map((Element) => Element.age);
  let child = 0;
  let senior = 0;
  let adult = 0;
  result.forEach((Element) => {
    if (Element < 18) { child += 1; }
    if (Element >= 18 && Element < 50) { adult += 1; }
    if (Element >= 50) { senior += 1; }
  });
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) return 0;
  const arraypessoa = countEntrants(entrants);
  const kids = arraypessoa.child * data.prices.child;
  const adult = arraypessoa.adult * data.prices.adult;
  const senior = arraypessoa.senior * data.prices.senior;
  return senior + kids + adult;
}

module.exports = { calculateEntry, countEntrants };
