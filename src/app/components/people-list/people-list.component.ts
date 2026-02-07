import { Component, OnInit } from '@angular/core';
import { PersonCardComponent } from "../person-card/person-card.component";
import { PersonService } from '../../services/person.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Character } from '../../models/character.model';
import { PaginationService } from '../../services/pagination.service';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FilterGenderPipe } from "../../pipes/filterGender.pipe";

@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  imports: [PersonCardComponent, CommonModule, MatIconModule, MatButtonModule, FilterGenderPipe]
})
export class PeopleListComponent implements OnInit { 
  public people$: Observable<Character[]> | null = null;

  constructor(private personService: PersonService,
  private pagination: PaginationService) {}

  ngOnInit(): void {
    this.personService.load().subscribe();
    this.people$ = this.personService.peopleSubject$;
  }
  
  nextPage(): void  {
    this.pagination.setPage(this.pagination.page$.value + 1);
    this.personService.load().subscribe();
  }

  prevPage(): void  {
    this.pagination.setPage(this.pagination.page$.value - 1);
    this.personService.load().subscribe();
  }
}