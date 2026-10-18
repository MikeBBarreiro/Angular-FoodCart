import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WeatherComponent } from '../weather-component/weather-component';

@Component({
  imports: [RouterLink, WeatherComponent],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class HeaderComponent {}
