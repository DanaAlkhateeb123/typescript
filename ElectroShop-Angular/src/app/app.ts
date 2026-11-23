import { Component, numberAttribute, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop');
storeName:string=    "ElectroShop";
storeDescription:string=    "Your favorite electronics store";
storeAddress:string =    "    Amman, Jordan";
totalProducts:number=    12;
isStoreOpen:boolean=true;
currency:string="USD";

productNames: string[] = [
  'Laptop',
  'Smartphone',
  'Headphones',
  'Smart Watch',
  'Keyboard',
];

productPrices: number[] = [750, 450, 80, 120, 45];

featuredProduct = {
  name: 'Laptop',
  price: 750,
  description: 'A powerful laptop for work, study, and entertainment.',
};


m: string = "";

discountPercentage: number = 0.10;

get finalPrice(): number {
  if (this.discountPercentage > 0) {
    this.featuredProduct.price =(this.featuredProduct.price - this.featuredProduct.price *this.discountPercentage);
  }
  return this.featuredProduct.price;
}

 Totalnumofproducts:number=0;
 Most_expensive:number= this.productPrices[0];
 Cheapest_product:number=this.productPrices[0];
 Totalvalue:number=0;


constructor() {
 if (this.isStoreOpen)
 {
 this.m = "We Are Open";
 }
 else{
 this.m = "We Are Closed";
 }

 for(let i : number =0 ; i<this.productNames.length ; i ++)
 {
  this.Totalnumofproducts ++; 
 }

 for(let i : number =0 ; i<this.productNames.length ; i ++)
 {
  if(this.productPrices[i]>this.Most_expensive)
  {
    this.Most_expensive=this.productPrices[i];
  }
 }
 for(let i : number =0 ; i<this.productNames.length ; i ++)
 {
  if(this.productPrices[i]<this.Cheapest_product)
  {
    this.Cheapest_product=this.productPrices[i];
  }
 }
  for(let i : number =0 ; i<this.productNames.length ; i ++)
 {
 this.Totalvalue+=this.productPrices[i];
 }
 
}

}