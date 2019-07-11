import { Component, OnInit } from '@angular/core';

import {CartService} from './../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers : [CartService]
})
export class ProductListComponent implements OnInit {
  
  products= [];

  constructor(Cart:CartService ) {

  //  Cart.addToCart(this.products)
  this.products.push(Cart.getItems);
  console.log(Cart.getItems);
}

  ngOnInit() {
 }
 Cart1:CartService;

 

  


}
