import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductListComponent } from './product-list/product-list';

@NgModule({
  declarations: [App, ProductListComponent],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
