import Item from '../item.js';

describe('Teste dos itens', () => {
  it('Deve ter 3 campos: nome, valor e quantidade', () => {
    const item = new Item('Alface', 3.5, 20);

    expect(item.nome).toBe('Alface');
    expect(item.valor).toBe(3.5);
    expect(item.quantidade).toBe(20);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () =>{
    const item = new Item('Tomate', 0.5, 3);

    expect(item.pegaValorTotalItem()).toBeCloseTo(1.5);
  });
});
