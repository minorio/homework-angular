import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { NarutoCharactersResponse } from '../models/naruto.model';

@Injectable({ providedIn: 'root' })
export class NarutoService {
  constructor(private http: HttpClient) {}
  private readonly narutoUrl = 'https://dattebayo-api.onrender.com/characters';
  getCharacters(page: number = 0, limit: number = 20) {
    let params: any = { limit: limit.toString() };
    if (page !== undefined) {
      params.page = (page + 1).toString();
    }
    return this.http
      .get<NarutoCharactersResponse>(this.narutoUrl, { params })
      .pipe(map((res) => res.characters));
  }
}
