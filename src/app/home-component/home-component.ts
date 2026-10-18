import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food-service';
import {Food} from '../shared/models/food'
import { CurrencyPipe } from '@angular/common';
import { CommonModule } from '@angular/common'; //this will import the CurrencyPipe along with a bunch of other angular tools, including *ngIf & *ngFor (the old way of doing if and for). We are going to stick with impornt the specific curreny tool for simplicity and learning.
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../search-component/search-component';
import { TagsComponent } from '../tags-component/tags-component';
import { NotFoundComponent } from '../not-found-component/not-found-component';
import { WeatherComponent } from '../weather-component/weather-component';

@Component({
  imports: [CurrencyPipe, SearchComponent, TagsComponent, RouterLink, NotFoundComponent],
  selector: 'app-home-component',
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})

export class HomeComponent {

  foods:Food[] = [];
  // foods:String[] = [];

  //We inject the foodService into the HomeComponent by adding it to the contructor parameter of HomeComponet.
  //we now have an instance of FoodService here in home component.
  //the route:ActivatedRoute gives us access to the routing for this entire component.
  constructor(private foodService:FoodService, private route:ActivatedRoute){

  }

  //OnInit we get all foods.
  ngOnInit(): void {
    //Whenever the params change notify the function within the subscribe ().
    //so when the route.param schanges.. it goes to the params within subscribe()
    this.route.params.subscribe((params: { searchTerm?: string, tag?: string }) => {

      //this is dot notation way. this is less dynamic & more RIDGID.
      if(params.searchTerm){

        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);

      }else if(params.tag){ //Tag comes from the app.routes.ts file from the path. Same with searchTerm. That is where it is being defined.
        
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      
      }else{

        // this.foods = this.foodService.getAll1();
        this.foods = this.foodService.getAll();
      
      }
    })
  }



}
