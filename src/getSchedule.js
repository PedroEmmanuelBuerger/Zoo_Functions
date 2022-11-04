const data = require('../data/zoo_data');

const mondayMsg = () => ({
  Monday: { officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!' },
});

const getex = (par1) => {
  const arr = [];
  const datas = data.species;
  datas.forEach((Element2) => {
    for (let i = 0; i < Element2.availability.length; i += 1) {
      if (Element2.availability[i] === par1) { return arr.push(Element2.name); }
    }
  });
  return arr;
};

const allDays = () => {
  const obj = {};
  const chaves = Object.keys(data.hours);
  const valores = Object.values(data.hours);
  for (let i = 0; i < 7; i += 1) {
    const { open, close } = valores[i];
    let horas = { officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: getex(chaves[i]) };
    if (chaves[i] !== 'Monday') { obj[chaves[i]] = horas; } else {
      horas = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      obj[chaves[i]] = horas;
    }
  }
  return obj;
};

const getDay = (par1) => {
  const dias = data.hours[par1];
  const { open } = dias;
  const { close } = dias;
  const arr = [];
  data.species.forEach((Element) => {
    for (let i = 0; i < Element.availability.length; i += 1) {
      if (Element.availability[i] === par1) { return arr.push(Element.name); }
    }
  });
  const obj = {
    [par1]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: arr,
    },
  };
  return obj;
};

const animalMsg = (par1) => {
  const animal = par1;
  return data.species.find((Element) => Element.name === animal).availability;
};

const verifyPars = (par1) => {
  if (par1 === 'Monday') { return mondayMsg(); }
  const animal = data.species.some((Element) => Element.name === par1);
  if (animal) { return animalMsg(par1); }
  const dia = Object.keys(data.hours).some((Element) => Element === par1);
  if (dia) { return getDay(par1); }
  return allDays();
};

function getSchedule(scheduleTarget) {
  const verifyPar = verifyPars(scheduleTarget);
  return verifyPar;
}

module.exports = getSchedule;
