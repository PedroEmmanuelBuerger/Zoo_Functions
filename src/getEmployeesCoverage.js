const data = require('../data/zoo_data');

const animalsNames = (par1) => par1.map((Element) => {
  const ids = Element;
  return data.species.find((Element2) => Element2.id === ids).name;
});

const locations = (par1) => {
  const resul = par1.map((Element) => {
    const idatual = Element;
    return data.species.find((Element2) => Element2.id === idatual).location;
  });
  return resul;
};

const allEmployess = () => {
  const { employees } = data;
  const result = employees.map((Element) => {
    const { id, firstName, lastName } = Element;
    const fullName = `${firstName} ${lastName}`;
    const animals = Element.responsibleFor;
    const animalsname = animalsNames(animals);
    const location = locations(animals);
    return { id, fullName, species: animalsname, locations: location };
  });
  return result;
};

const verifyPeople = (contratados, valor) => {
  if (valor.length === 1) {
    const result1 = contratados.find((Element) => Element.firstName === valor[0]
  || Element.lastName === valor[0] || Element.id === valor[0]);
    return result1;
  }
  const result1 = contratados.find((Element) => Element.firstName === valor[0]
  || Element.lastName === valor[0] || Element.id === valor[0]);
  const result2 = contratados.find((Element) => Element.firstName === valor[1]
  || Element.lastName === valor[1] || Element.id === valor[1]);
  if (result1 === result2) return result1;
};

function getEmployeesCoverage(par1) {
  if (!par1) { return allEmployess(); }
  const chaves = Object.values(par1);
  const contratados = data.employees.map((Element) => Element);
  const pessoa = verifyPeople(contratados, chaves);
  if (pessoa === undefined) { throw new Error('Informações inválidas'); }
  const { id, firstName, lastName } = pessoa;
  const animals = pessoa.responsibleFor;
  const animalsname = animalsNames(animals);
  const location = locations(animals);
  const fullName = `${firstName} ${lastName}`;
  return { id, fullName, species: animalsname, locations: location };
}

module.exports = getEmployeesCoverage;
