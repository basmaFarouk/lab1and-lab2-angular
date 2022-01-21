import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TestOneComponent} from './testone-component/test-one.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './core/product-feature/product-item/product-item.component';
import { ProductListingComponent } from './core/product-feature/product-listing/product-listing.component';
import { ProductFilterComponent } from './core/product-feature/product-filter/product-filter.component';
import { TestFromCliComponent } from './test-from-cli/test-from-cli.component'

@NgModule({
  declarations: [
    AppComponent, 
    TestOneComponent, NavbarComponent, ProductItemComponent, ProductListingComponent, ProductFilterComponent, TestFromCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
