const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const msgclosed1 = 'The zoo is closed';
  const msgopen1 = 'The zoo is open';
  test('verifica se getOpeningHours é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  test('verifica se ao receber nenhum parametro retorna as horas', () => {
    const hours = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(hours);
  });
  test('verifica se ao passar monday e qualquer horario retorna a mensagem the zoo is closed', () => {
    expect(getOpeningHours('monday', '09:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '08:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '10:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '11:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '12:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '07:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '06:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '05:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '04:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '03:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '02:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('monday', '01:00-AM')).toMatch(msgclosed1);
  });
  test('verifica se ao passar um dia da semana valido com um horario a mensagem recebida é the zoo is open', () => {
    expect(getOpeningHours('Tuesday', '08:00-AM')).toMatch(msgopen1);
    expect(getOpeningHours('Wednesday', '08:00-AM')).toMatch(msgopen1);
    expect(getOpeningHours('Thursday', '10:00-AM')).toMatch(msgopen1);
    expect(getOpeningHours('Friday', '10:00-AM')).toMatch(msgopen1);
    expect(getOpeningHours('Saturday', '08:00-AM')).toMatch(msgopen1);
    expect(getOpeningHours('Sunday', '08:00-AM')).toMatch(msgopen1);
  });
  test('verifica se ao passar dias em lowercase, o retorno é o mesmo', () => {
    expect(getOpeningHours('tuesday', '08:00-AM')).toMatch(msgopen1);
    expect(getOpeningHours('wednesday', '08:00-AM')).toMatch(msgopen1);
    expect(getOpeningHours('thursday', '10:00-AM')).toMatch(msgopen1);
    expect(getOpeningHours('friday', '10:00-AM')).toMatch(msgopen1);
    expect(getOpeningHours('saturday', '08:00-AM')).toMatch(msgopen1);
    expect(getOpeningHours('sunday', '08:00-AM')).toMatch(msgopen1);
  });
  test('verifica se ao receber um horario que ainda não abriu ele retorna que o zoo is closed', () => {
    expect(getOpeningHours('tuesday', '07:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('wednesday', '07:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('thursday', '09:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('friday', '09:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('saturday', '07:00-AM')).toMatch(msgclosed1);
    expect(getOpeningHours('sunday', '07:00-AM')).toMatch(msgclosed1);
  });
  test('verifica se ao receber um dia da semana que não existe, retorne um erro', () => {
    expect(() => getOpeningHours('pedro', '07:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  test('verifica se ao receber algo que não seja AM ou PM Recebe um erro', () => {
    expect(() => getOpeningHours('tuesday', '07:00-RS')).toThrow(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  test('verifica se as horas ou minutos são numeros', () => {
    const hours = 'The hour should represent a number';
    const minutes = 'The minutes should represent a number';
    expect(() => getOpeningHours('tuesday', 'pe:00-am')).toThrow(hours);
    expect(() => getOpeningHours('tuesday', ':00-am')).toThrow(hours);
    expect(() => getOpeningHours('tuesday', '00:pe-am')).toThrow(minutes);
    expect(() => getOpeningHours('tuesday', '00:-am')).toThrow(minutes);
  });
  test('verifica se ao receber uma hora que não seja entre 0 e  12 e minutos que não sejam entre 0 e 59 retorne um erro', () => {
    const hours = 'The hour must be between 0 and 12';
    const minutes = 'The minutes must be between 0 and 59';
    expect(() => getOpeningHours('tuesday', '13:00-AM')).toThrow(hours);
    expect(() => getOpeningHours('tuesday', '14:00-AM')).toThrow(hours);
    expect(() => getOpeningHours('tuesday', '15:00-AM')).toThrow(hours);
    expect(() => getOpeningHours('tuesday', '16:00-AM')).toThrow(hours);
    expect(() => getOpeningHours('tuesday', '17:00-AM')).toThrow(hours);
    expect(() => getOpeningHours('tuesday', '18:00-AM')).toThrow(hours);
    expect(() => getOpeningHours('tuesday', '08:60-AM')).toThrow(minutes);
    expect(() => getOpeningHours('tuesday', '08:61-AM')).toThrow(minutes);
    expect(() => getOpeningHours('tuesday', '08:62-AM')).toThrow(minutes);
    expect(() => getOpeningHours('tuesday', '08:100-AM')).toThrow(minutes);
    expect(() => getOpeningHours('tuesday', '08:150-AM')).toThrow(minutes);
    expect(() => getOpeningHours('tuesday', '08:200-AM')).toThrow(minutes);
  });
  test('verifica se os horarios de fechar estão batendo com a tabela', () => {
    expect(getOpeningHours('tuesday', '06:00-PM')).toMatch(msgclosed1);
    expect(getOpeningHours('wednesday', '06:00-PM')).toMatch(msgclosed1);
    expect(getOpeningHours('thursday', '08:00-PM')).toMatch(msgclosed1);
    expect(getOpeningHours('friday', '08:00-PM')).toMatch(msgclosed1);
    expect(getOpeningHours('saturday', '10:00-PM')).toMatch(msgclosed1);
    expect(getOpeningHours('tuesday', '05:00-PM')).toMatch(msgopen1);
    expect(getOpeningHours('wednesday', '05:00-PM')).toMatch(msgopen1);
    expect(getOpeningHours('thursday', '07:00-PM')).toMatch(msgopen1);
    expect(getOpeningHours('friday', '07:00-PM')).toMatch(msgopen1);
    expect(getOpeningHours('saturday', '09:00-PM')).toMatch(msgopen1);
  });
});
