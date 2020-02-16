import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_KEY = 'd2c4abc923514e51a97d03ee5358ca40';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getNews() {
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apikey=${this.API_KEY}`);
  }
}
