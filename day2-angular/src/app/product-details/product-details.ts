import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  @Input() productName = '';
  @Input() productDescription = '';
  @Input() productPrice = 0;
  @Input() isAvailable = false;
  @Input() productImage = '';
  @Output() addToCartEvent = new EventEmitter<{ productName: string; quantity: number }>();

  quantity = signal(1);
  discountPercentage = 10;

  addToCart() {
    this.addToCartEvent.emit({ productName: this.productName, quantity: this.quantity() });
  }

  increase() {
    this.quantity.update(current => current + 1);
  }

  decrease() {
    if (this.quantity() > 1) {
      this.quantity.update(current => current - 1);
    }
  }
}

