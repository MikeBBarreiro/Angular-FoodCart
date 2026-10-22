import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';
import { weatherModel } from '../../shared/models/weatherDataModel';
import { Observable, tap } from 'rxjs';

@Service()

export class WeatherService {
    
    //weatherData: Array<weatherModel> = [];
    http = inject(HttpClient) //this gives us all the access needs for HTTP. ei. GET POST DELTE..ex;
    
    url: string = "";
    geoLocate:boolean = false;
    latitude?: number;
    longitude?: number;

    //Lets create a variable property that will be used throughout the entire application by using a signal
    globalWeatherData = signal<any>(null)

    //Import use of @ngx-env/builder package
    private apiKey = import.meta.env['NG_APP_WEATHER_API_KEY'];

    constructor(){
    }

    getWeatherFromApi(){

        //Do we have geolocation on the browser? If not, default to the big easy.
        if(!this.geoLocate){
            this.url = `https://api.openweathermap.org/data/2.5/weather?lat=29.951065&lon=-90.071533&units=imperial&appid=${this.apiKey}`
        }else{
            this.url = `https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=${this.apiKey}`
        }

        //Return an array of weatherModel's
        // return this.http.get<Array<weatherModel>>(this.url);

        //Return an single object of weatherModel. while we return the object, 
        // lets interccept the pipe by tapping into it and setting the global variable

        //the .pipe() -- This means we can access the pipe from http and get a "snap shot".. onto that stream of data (water through a pipe) to alter, inspect, or transform the data before it reaches your final destination .subscribe() block.
        //[ HTTP Get Request ] ---> .pipe( tool1, tool2 ) YOU ARE HERE ---> [ Final Destination .subscribe() ]
        //the tap -- is a passive observer, it lets you "tap into" the stream, look at the data and do somthing with it.. like saving to a Global signal variable.
        return this.http.get<weatherModel>(this.url).pipe(
            tap(data => this.globalWeatherData.set(data))
        );
    }

    // 1. Wrap the location detection loop into a clean Observable stream or Observerble Chain
    getLocation(): Observable<boolean> {
        return new Observable((observer) => {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        this.geoLocate = true;
                        this.latitude = position.coords.latitude;
                        this.longitude = position.coords.longitude;
                        observer.next(true); // Tell the stream we have coordinates
                        observer.complete();
                    },
                    (error) => {
                        this.geoLocate = false;
                        observer.next(false); // Tell the stream to use fallback values
                        observer.complete();
                    }
                );
            } else {
                this.geoLocate = false;
                observer.next(false);
                observer.complete();
            }
        });
        // without the return wrapping we can use this.
        // if ("geolocation" in navigator) {
        //     navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        //         this.geoLocate = true;
        //         this.latitude = position.coords.latitude;
        //         this.longitude = position.coords.longitude;
        //         console.log(`Latitude: ${this.latitude}, Longitude: ${this.longitude}`);
        //         return this.geoLocate;
        //     },
        //     (error: GeolocationPositionError) => {
        //         this.geoLocate = false;
        //         console.error(`Error (${error.code}): ${error.message}`);
        //     },
        //     {
        //         enableHighAccuracy: true, // Uses GPS if available (slower/more battery)
        //         timeout: 10000,           // Maximum time (ms) to wait
        //         maximumAge: 0             // Do not use a cached position
        //     }
        //     );
        // } else {
        //     this.geoLocate = false;
        //     console.error("Geolocation is not supported by this browser.");
        // }
    }
}
