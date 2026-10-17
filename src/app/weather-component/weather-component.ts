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

    //before wrapper
    // this.weatherService.getWeatherFromApi()
    //   .pipe(catchError((err) => {
    //     console.log(err);
    //     throw err;
    //   })
    // ).subscribe((data) => {
    //   this.weatherData.set(data);
    // });
  
    console.log("On Init");

     // Step 1: Run the location function check first
    this.weatherService.getLocation().subscribe((hasLocation) => {
      
      // Step 2: This code executes ONLY after the location stream completes
      this.weatherService.getWeatherFromApi().subscribe((data) => {
        // Step 3: Write the weather details straight to your component signal
        this.weatherData.set(data); 
      });

    });
  }


}
