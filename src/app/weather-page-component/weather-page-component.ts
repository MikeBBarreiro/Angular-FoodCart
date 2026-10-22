import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { WeatherService } from '../services/weather/weather-service';
import { GlobalService } from '../shared/services/global-service';

@Component({
  imports: [],
  selector: 'app-weather-page-component',
  styleUrl: './weather-page-component.css',
  templateUrl: './weather-page-component.html',
})
export class WeatherPageComponent implements OnInit {

  private weatherService = inject(WeatherService);
  private globalService = inject(GlobalService);

  // 1. Get our Global data from the SharedService
  public data = this.globalService.sharedWeatherData;

  // 2. Use computed signals with safe navigation (?.) to protect against null data
  //these values will update Automatically when the parent data changes.
  public temp = computed(() => this.data()?.main?.temp);
  public feels_like = computed(() => this.data()?.main?.feels_like);
  public windSpeed = computed(() => this.data()?.wind?.speed);
  public humidity = computed(() => this.data()?.main?.humidity);
  public pressure = computed(() => this.data()?.main?.pressure);

  private router = inject(Router);
  private receivedWeatherData: any;
  answer:boolean = false;

  constructor(){

    effect(() => {
      const feelsLike = this.feels_like();
      const windSpeed = this.windSpeed();
      const humidity = this.humidity();

      // lets check if the value is undefined
      if(feelsLike !== undefined && feelsLike !== null){
        if ((feelsLike > 65 && feelsLike < 85) && windSpeed < 10 && (humidity >= 40 && humidity <= 70)) {
          console.log('good weather')
          this.answer = true;
        }else{
          this.answer = false;
          console.log('no good weather');
        }
      }
    });

    //This is how we access from the Global variable made in the weatherService.
    if(this.weatherService.globalWeatherData())
      console.log("GLOBAL VARIABLE - Being set from the weather service, in a pipe using tap: ", this.weatherService.globalWeatherData().main.temp)

   
      const navigation = this.router.getCurrentNavigation();
      this.receivedWeatherData = navigation?.extras.state?.['weatherData'];

      if(this.receivedWeatherData){
        //this was passed through our Router, in the weather Component Html.
        console.log('Our New Data, passed through [routerLink] using [state]: ', this.receivedWeatherData);
      }

  }

  ngOnInit(){}
  
}
