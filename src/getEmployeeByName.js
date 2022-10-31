const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const nome = employeeName;
  const result = data.employees.find((Element) => Element.firstName === nome
  || Element.lastName === nome);
  return result;
}

module.exports = getEmployeeByName;
