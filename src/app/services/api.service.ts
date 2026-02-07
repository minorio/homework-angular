import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, CharactersResponse } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  private readonly url = 'https://dattebayo-api.onrender.com/characters';

  getCharacters(): Observable<Character[]> {
  return this.http
    .get<CharactersResponse>(this.url)
    .pipe(map(res => res.characters));
}

}
