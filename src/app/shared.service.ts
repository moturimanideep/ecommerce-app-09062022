import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  cartProducts: any = [];
  constructor() { 
    if (localStorage.getItem('cart-products')) {
      const a: any = localStorage.getItem('cart-products');
      this.cartProducts = JSON.parse(a);
    }
  }
  getCartProducts() {
    return this.cartProducts;
  }
  setCartProducts(products: any) {
    this.cartProducts = products;
    localStorage.setItem('cart-products', JSON.stringify(this.cartProducts));
    console.log(this.cartProducts);
  }
}
