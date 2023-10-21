import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';
@Injectable({
 providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '<8c3bffa616ced0d0310632448b6f73a7';

  getWeather(city: string): Observable<Weather> {
    const options = new HttpParams()
    .set('units', 'metric')
    .set('q', city)
    .set('appId', this.apiKey);
    return this.http.get<Weather>(this.apiUrl + 'weather', { params:
   options });
  }
  
}