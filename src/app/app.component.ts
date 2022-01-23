import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';
import { Product } from './_models/product/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-lab1pro';
  addedProduct: Product[] = []


  onItemAdded(product: Product){
    console.log(product)
    if(this.addedProduct.includes(product)){
      this.addedProduct.length+1

     
    }else{

      this.addedProduct.push(product)  //make product global in class
    }

  }

}
