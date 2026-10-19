import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { WeatherService } from '../services/weather/weather-service';

@Component({
  imports: [],
  selector: 'app-weather-page-component',
  styleUrl: './weather-page-component.css',
  templateUrl: './weather-page-component.html',
})
export class WeatherPageComponent {

  private weatherService = inject(WeatherService);

  private router = inject(Router);
  private receivedWeatherData: any;

  constructor(){

    //This is how we access form the Global variable made in the weatherService.
    console.log("GLOBAL VARIABLE - Being set from the weather service, in a pipe using tap: ", this.weatherService.globalWeatherData().main.temp)

    const navigation = this.router.getCurrentNavigation();
    this.receivedWeatherData = navigation?.extras.state?.['weatherData'];

    //this was passed through our Router, in the weather Component Html.
    console.log('Our New Data, passed through [routerLink] using [state]: ', this.receivedWeatherData);
  }
  
}
