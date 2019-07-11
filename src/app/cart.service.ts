import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items = [
    {
      "city": "animal"
    },
    {
      "city": "bird"
    }
  ];
  addToCart(product) {
    this.items.push(product);
  }
 
  getItems() {
    return this.items[0];
  }
 
  clearCart() {
    this.items = [];
    return this.items;
  }
}
