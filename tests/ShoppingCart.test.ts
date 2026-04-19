import { ShoppingCart } from '../src/ShoppingCart';

describe('ShoppingCart', () => {

  test('empieza vacío con total 0', () => {
    const cart = new ShoppingCart();
    expect(cart.getTotal()).toBe(0);
  });

  test('agrega un producto y calcula total', () => {
    const cart = new ShoppingCart();
    cart.addItem({ name: 'Camisa', price: 30, quantity: 2 });
    expect(cart.getTotal()).toBe(60);
  });

  test('aplica 10% descuento si total supera $100', () => {
    const cart = new ShoppingCart();
    cart.addItem({ name: 'Zapatos', price: 60, quantity: 2 });
    expect(cart.getTotal()).toBe(108);
  });

  test('lanza error si precio es negativo', () => {
    const cart = new ShoppingCart();
    expect(() => cart.addItem({ name: 'X', price: -5, quantity: 1 }))
      .toThrow('Precio inválido');
  });

  test('lanza error si cantidad es 0', () => {
    const cart = new ShoppingCart();
    expect(() => cart.addItem({ name: 'X', price: 10, quantity: 0 }))
      .toThrow('Cantidad inválida');
  });

});