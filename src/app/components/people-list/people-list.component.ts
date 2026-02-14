import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { PersonCardComponent } from '../person-card/person-card.component';
import { PersonService } from '../../services/person.service';
import { debounceTime, distinctUntilChanged, Observable, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character.model';
import { PaginationService } from '../../services/pagination.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AsyncPipe } from '../../pipes/async.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  imports: [
    PersonCardComponent,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
  ],
})
export class PeopleListComponent implements OnInit {
  private personService = inject(PersonService);
  public pagination = inject(PaginationService);
  private destroyRef = inject(DestroyRef);
  public people$: Observable<Character[]> = this.personService.people$;
  public searchControl = new FormControl('');

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(300),
        distinctUntilChanged(),
        tap(() => this.pagination.reset()),
        takeUntilDestroyed((this.destroyRef))
      )
      .subscribe((name) => this.personService.searchTerm$.next(name ?? ''));

  }
  
  nextPage() {
    this.pagination.nextPage()
  }

  prevPage() {
    this.pagination.prevPage()
  }
}