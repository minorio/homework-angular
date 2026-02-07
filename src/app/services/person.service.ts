import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private people: Character[] = [];
  private peopleSubject$ = new BehaviorSubject<Character[]>([]);

  constructor(private api: ApiService) {}

  public load(): Observable<Character[]> {
    return this.api.getCharacters().pipe(
      tap((list) => {
        this.people = list;
        this.peopleSubject$.next(this.people);
      }),
    );
  }

  public updatePerson(updated: Character): void {
    const people = this.peopleSubject$.getValue();
    const updatedList = people.map((person) => (person.id === updated.id ? updated : person));

    this.peopleSubject$.next(updatedList);
  }
}
