import { Injectable } from '@angular/core';
import { Product } from '../../Model/product.model';

@Injectable()
export class Cart {

  // Attributes
  public Lines: CartLine[] = [];
  public itemCount = 0;
  public cartPrice  = 0;

  // Methods
  addLine(product: Product, quantity = 1) {
    const line = this.Lines.find(l => l.product.id === product.id);
    if (line !== undefined) {
      line.quantity += quantity;
    } else {
      this.Lines.push(new CartLine(product, quantity));
    }
    // Todo Call the method of re-calc()
    this.reCalculate();
  }

  updateQuantity(product: Product, quantity: number) {
    const line = this.Lines.find(l => l.product.id === product.id);
    if (line !== undefined) {
      line.quantity = Number(quantity);
    }
    // re-calc()
    this.reCalculate();
  }

  removeLine(id: number) {
    const index = this.Lines.findIndex(line => line.product.id === id);
    this.Lines.splice(index, 1);
    // re-calc()
    this.reCalculate();
  }

  clear() {
    this.Lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  // Re-calc()
  private reCalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.Lines.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += (l.quantity * l.product.price);
    });
  }

}

export class CartLine {
  constructor(
    public product: Product,
    public quantity: number) {}

  get lineTotal() {
    return this.quantity * this.product.price;
  }
}
