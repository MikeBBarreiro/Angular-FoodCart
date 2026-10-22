import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WeatherService } from '../services/weather/weather-service';
import { weatherModel } from '../shared/models/weatherDataModel';
import { TooltipDirective } from '../directives/tooltip-directive';
import { catchError, switchMap } from 'rxjs';
import { GlobalService } from '../shared/services/global-service';

@Component({
  imports: [RouterLink, TooltipDirective],
  standalone: true,
  selector: 'app-weather-component',
  styleUrl: './weather-component.css',
  templateUrl: './weather-component.html',
})

export class WeatherComponent implements OnInit{

    weatherService = inject(WeatherService);
    globalService = inject(GlobalService);
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

    //The below is more efficient and should be used instead of the below commented out code. they both do the same, but this is better practice and the other can create memory leaks, as subsriptions will need to be destroyed eventually.
    // switchMap is great because if getLocation emits a new location while an old weather API call is still pending, 
    // switchMap will automatically cancel and unsubscribe from the previous inner API request before opening the new one.
    //  Step 1: Run the location function check first
    this.weatherService.getLocation().pipe(
      switchMap((hasLocation) => {
        // This executes ONLY after location is successfully found and set in the service
        return this.weatherService.getWeatherFromApi();
      })
    ).subscribe((data) => {
      // Set the clean, final data directly to your Angular signal
      this.weatherData.set(data); 
      // update teh GlobalService, so this data can be used else where asynchronously.  
      this.globalService.setWeatherPageData(data);
    });

     // Step 1: Run the location function check first (this way is not good practice, unmaged subcriptions can cause memory leaks..)
    // this.weatherService.getLocation().subscribe((hasLocation) => {
      
    //   // Step 2: This code executes ONLY after the location stream completes
    //   // this.weatherService.getWeatherFromApi().subscribe((data) => {
    //   //   // Step 3: Write the weather details straight to your component signal
    //   //   this.weatherData.set(data);
    //   //   // update teh GlobalService, so this data can be used else where asynchronously.  
    //   //   this.globalService.setWeatherPageData(data);
    //   // });
    // });

  }


}
