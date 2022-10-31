const data = require('../data/zoo_data');

function isManager(id) {
  const pessoa = data.employees.find((Element) => Element.id === id);
  const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
  const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
  const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
  const gerentes = [stephanieId, olaId, burlId];
  return gerentes.some((Element) => Element === pessoa.id);
}

function getRelatedEmployees(managerId) {
  const result = isManager(managerId);
  if (result === true) {
    const p = data.employees.filter((Eleme) => Eleme.managers.find((par2) => par2 === managerId));
    return p.map((Element) => `${Element.firstName} ${Element.lastName}`);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
