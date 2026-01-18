import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMemeResponse } from '../models/meme.model';

@Injectable({
  providedIn: 'root',
})

export class MemeApiService {
  private readonly url = 'https://meme-api.com/gimme';

  constructor(private http: HttpClient) { }

  getMeme(): Observable<IMemeResponse> {
    return this.http.get<IMemeResponse>(this.url);
  }
}
