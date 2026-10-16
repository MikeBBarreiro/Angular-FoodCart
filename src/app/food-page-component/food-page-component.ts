import { Component } from '@angular/core';
import { Food } from '../shared/models/food'
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food-service';
import { TagsComponent } from '../tags-component/tags-component';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../services/cart/cart-service';
import { CartPageComponent } from '../cart-page-component/cart-page-component';
import { NotFoundComponent } from '../not-found-component/not-found-component';

@Component({
  imports: [TagsComponent, CurrencyPipe, NotFoundComponent],
  selector: 'app-food-page-component',
  styleUrl: './food-page-component.css',
  templateUrl: './food-page-component.html',
})
export class FoodPageComponent {

  food!:Food;

  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService, private cartService:CartService, private router:Router){
    // we can use { id?: number } to identify params.id or use params[id] in the if statement
    activatedRoute.params.subscribe((params: { id?: number }) => {
      if(params.id)
          this.food = foodService.getFoodById(params.id)
    })
  }

  ngOnInit(): void {}

  //parameter is not required from the template file, because we already have the food property. this will give us what we need.
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
