import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productsArray: Product[] = [
    {id:1, name:'camera', price:120, discount:10, imageUrl: 'https://picsum.photos/200/300'},
    {id:2, name:'photoCamera', price:1000, discount:20, imageUrl: 'https://picsum.photos/200/301'},
    {id:3, name:'labtop', price:200, discount:10, imageUrl: 'https://picsum.photos/200/302'},
    {id:4, name:'mobile', price:500, imageUrl: 'https://picsum.photos/200/303'},
    {id:5, name:'Pc', price:700, discount:70, imageUrl: 'https://picsum.photos/200/304'},
    {id:6, name:'tablet', price:100, discount:10, imageUrl: 'https://picsum.photos/200/305'},
    {id:7, name:'mouse', price:100, discount:10, imageUrl: 'https://picsum.photos/200/306'},
    {id:8, name:'keyboard', price:100, discount:10, imageUrl: 'https://picsum.photos/200/307'},
  ]

  @Output()
  itemAdded: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }

  onItemAddedToCart(product: Product){
    console.log(product)
    this.itemAdded.emit(product)
  }
}
