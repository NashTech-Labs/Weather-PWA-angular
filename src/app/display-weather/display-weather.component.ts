import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-display-weather',
  templateUrl: './display-weather.component.html',
  styleUrls: ['./display-weather.component.scss']
})
export class DisplayWeatherComponent {
  weatherData: any;
  city = 'Delhi'; // You can make this dynamic

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeather(this.city).subscribe((data: any) => {
      this.weatherData = data;
    });
  }

}
