import { Component } from '@angular/core';

export interface Product {
  ProductName: string;
  Description: string;
  Price: number;
  Image: string;
  Availability: boolean;
}
@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})

export class ProductList {
  products: Product[] = [
    {
      ProductName: 'Laptop',
      Description: 'High-performance laptop',
      Price: 750,
      Image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400',
      Availability: true,
    },
    {
      ProductName: 'Smartphone',
      Description: 'Latest smartphone',
      Price: 450,
      Image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400',
      Availability: true,
    },
    {
      ProductName: 'Headphones',
      Description: 'Wireless headphones',
      Price: 80,
      Image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      Availability: true,
    },
    {
      ProductName: 'Smart Watch',
      Description: 'Smart fitness watch',
      Price: 120,
      Image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      Availability: true,
    },
    {
      ProductName: 'Keyboard',
      Description: 'Mechanical keyboard',
      Price: 45,
      Image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400',
      Availability: false,
    },
  ];

  buyNow(productName: string): void {
    alert(`Buying ${productName}`);
  }
}
