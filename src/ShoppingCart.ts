interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export class ShoppingCart {
  private items: CartItem[] = [];

  addItem(item: CartItem): void {
    if (item.price < 0) throw new Error('Precio inválido');
    if (item.quantity <= 0) throw new Error('Cantidad inválida');
    this.items.push(item);
  }

  getTotal(): number {
    const subtotal = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
    return subtotal > 100 ? subtotal * 0.9 : subtotal;
  }
}