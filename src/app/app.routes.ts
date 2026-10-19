import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { FoodPageComponent } from './food-page-component/food-page-component';
import { CartItem } from './shared/models/cartItem';
import { CartPageComponent } from './cart-page-component/cart-page-component';
import { WeatherPageComponent } from './weather-page-component/weather-page-component';

export const routes: Routes = [
    {path:'', component:HomeComponent}, //this url will takes us to the HomeComponent
    {path:'search/:searchTerm', component:HomeComponent}, //url will be used to search specific foods or items & will show & use HomeComponent.
    {path:'tag/:tag', component:HomeComponent}, //url wll be used to search specific foods with tags & will show & use HomeComponent. EXMAPLE: localhost:4200/tag/FastFood
    {path:'food/:id', component:FoodPageComponent}, //url will be used to view specific foods
    {path:'cart-page', component:CartPageComponent}, //url will be used to view specific foods in cart
    {path:'weather-page', component:WeatherPageComponent} //url will be used to view weather for grill outs.
];
