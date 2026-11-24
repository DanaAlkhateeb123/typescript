import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  productName = 'Laptop';
  productDescription = 'High-performance laptop';
  productPrice = 750;
  productImage = 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600';
  quantity = 1;
  isAvailable = true;
  discountPercentage = 10;
}
