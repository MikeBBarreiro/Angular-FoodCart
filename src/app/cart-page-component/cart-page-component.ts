import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart-service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/cartItem';
import { CurrencyPipe } from '@angular/common';
import { FoodService } from '../services/food/food-service';
import { NotFoundComponent } from '../not-found-component/not-found-component';

@Component({
  imports: [CurrencyPipe, NotFoundComponent],
  selector: 'app-cart-page-component',
  styleUrl: './cart-page-component.css',
  templateUrl: './cart-page-component.html',
})

//implements OnInit: this is a LifeCycle Set. look more to understand pelase.
export class CartPageComponent implements OnInit{

  cart!:Cart;

  constructor(private cartService:CartService){
    this.setCart();
  }

  ngOnInit() :void{}

  setCart(){
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart(); //reload the cart data by simply getting Cart data
  }
 
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart(); //reload the cart data by simply getting Cart data
  }

}
