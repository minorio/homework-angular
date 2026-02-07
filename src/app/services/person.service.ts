import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  people: Character[] = [];
  peopleSubject$ = new BehaviorSubject<Character[]>([]);

  constructor(private api: ApiService) {}

  load(): Observable<Character[]> {
    return this.api.getCharacters().pipe(
      tap((list) => {
        this.people = list;
        this.peopleSubject$.next(this.people);
      }),
    );
  }

  updatePerson(updated: Character): void {
    const people = this.peopleSubject$.getValue();
    const updatedList = people.map((person) => (person.id === updated.id ? updated : person));

    this.peopleSubject$.next(updatedList);
  }
}
