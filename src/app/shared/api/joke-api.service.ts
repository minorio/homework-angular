import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IJokeResponse } from '../models/joke.model';

@Injectable({
  providedIn: 'root',
})

export class JokeApiService {
  private readonly url = 'https://official-joke-api.appspot.com/random_joke';

  constructor(private http: HttpClient) { }

  getJoke(): Observable<IJokeResponse> {
    return this.http.get<IJokeResponse>(this.url);
  }
}
