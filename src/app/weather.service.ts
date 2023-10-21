import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
 providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  
  private apiUrl = 'https://api.openweathermap.org/data/2.5/';
  private apiKey = '<8c3bffa616ced0d0310632448b6f73a7';
}