import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('day2-angular');

  productName = signal('Wireless Headphones');
  productDescription = signal('Bluetooth Headphones');
  productPrice = signal(120);
  productAvailability = signal(true);
  productImage = signal('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600');

  cartProductName = '';
  cartProductPrice = 0;
  cartQuantity = 0;

  addToCart(product: { productName: string; quantity: number }): void {
    this.cartProductName = product.productName;
    this.cartProductPrice = this.productPrice();
    this.cartQuantity = product.quantity;
  }
}
