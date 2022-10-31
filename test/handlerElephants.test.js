const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('testar se a função HandlerElephants é de fato uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  test('verifica se ao receber nenhum parametro handlerElephants da undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  test('verifica se a função retorna uma mensagem de erro caso o parametro não seja uma string', () => {
    const frase = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(1)).toMatch(frase);
    expect(handlerElephants(true)).toMatch(frase);
    expect(handlerElephants([])).toMatch(frase);
    expect(handlerElephants({})).toMatch(frase);
  });
  test('verifica se ao receber Count como parametro a função retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('verifica se ao receber names como parametro ele reotnra um array com todos os nomes de todos os elefantes', () => {
    const nomes = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(nomes);
  });
  test('verifica se ao receber averageAge como parametro ele retorna a media da idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('verifica se ao receber location ele retorna a localização dos elefantes dentro do zoológico', () => {
    expect(handlerElephants('location')).toMatch('NW');
  });
  test('verifica se ao receber popularity como parametro ele retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('verifica se ao receber availability como parametro retorna um array com a relação de dia em que é possivel visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  test('verifica se ao receber uma string que não seja nenhuma das citadas nos testes anteriores, retorna null', () => {
    expect(handlerElephants('teste')).toBe(null);
  });
});
