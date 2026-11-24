import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  storeName = 'ElectroShop';
  storeAddress = 'Amman, Jordan';
  contactEmail = 'contact@electroshop.example';
  copyrightMessage = `© ${new Date().getFullYear()} ElectroShop. All rights reserved.`;
}
