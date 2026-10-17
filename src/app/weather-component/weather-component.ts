import { Component, inject, OnInit, signal } from '@angular/core';
import { WeatherService } from '../services/weather/weather-service';
import { weatherModel } from '../shared/models/weatherDataModel';
import { catchError } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-weather-component',
  styleUrl: './weather-component.css',
  templateUrl: './weather-component.html',
})

export class WeatherComponent implements OnInit{

    weatherService = inject(WeatherService);
    weatherData = signal<weatherModel | null>(null);
    //if multiple objects came back of multiple cityes or just more then one data point we can make 
    // our weatherData into an array like so
    // weatherData = signal<Array<weatherModel>>([]);
    

  ngOnInit(): void {
    // console.log(this.weatherService.weatherData);
    this.weatherService.getWeatherFromApi()
      .pipe(catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((data) => {
      this.weatherData.set(data);
    });
  }


}
