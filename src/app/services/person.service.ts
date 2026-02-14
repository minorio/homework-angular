import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  switchMap,
} from 'rxjs';
import { Character, CharactersResponse } from '../models/character.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PaginationService } from './pagination.service';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  public peopleSubject$ = new BehaviorSubject<Character[]>([]);
  private readonly url = 'https://dattebayo-api.onrender.com/characters';
  public searchTerm$ = new BehaviorSubject('');
  public people$ = this.peopleSubject$.asObservable();
  constructor(
    private http: HttpClient,
    private pagination: PaginationService,
  ) {
    combineLatest([
      this.pagination.page$,
      this.searchTerm$.pipe(distinctUntilChanged()),
      this.pagination.limit$,
    ])
      .pipe(
        debounceTime(300),
        switchMap(([page, name, limit]) => {
          let params = new HttpParams();
          if (name && name.trim() !== '') {
            params = params.set('name', name);
          } else {
            params = params.set('page', page.toString()).set('limit', limit.toString());
          }
          return this.http.get<CharactersResponse>(this.url, { params });
        }),
        map((res) => res.characters),
      )
      .subscribe((characters) => this.peopleSubject$.next(characters));
  }
  public updatePerson(updated: Character): void {
    const people = this.peopleSubject$.getValue();
    const updatedList = people.map((p) => (p.id === updated.id ? updated : p));
    this.peopleSubject$.next(updatedList);
  }
}
