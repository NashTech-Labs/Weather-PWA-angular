import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  //ADD YOUR KEY
  private apiKey = 'YOUR_API_KEY';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(`${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
