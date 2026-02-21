import { Component, DestroyRef, inject, OnInit, ViewChild } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { TableCharacter, TableResponse } from '../../models/table-character.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatOption, MatSelect } from '@angular/material/select';
import { CharactersFiltersComponent } from '../characters-filters/characters-filter.component';
import { CharactersTableComponent } from '../characters-table/characters-table.component';

@Component({
  selector: 'characters',
  templateUrl: 'characters.component.html',
  styleUrls: ['characters.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatTooltip,
    MatPaginator,
    ReactiveFormsModule,
    MatOption,
    MatSelect,
    CharactersFiltersComponent,
    CharactersTableComponent,
  ],
})
export class CharactersComponent implements OnInit {
  public readonly displayedColumns: string[] = [
    'id',
    'images',
    'name',
    'gender',
    'imagesDemonSlayer',
    'nameDemonSlayer',
    'genderDemonSlayer',
    'quoteDemonSlayer',
    'delete',
  ];
  public dataSource = new MatTableDataSource<TableCharacter>([]);
  private readonly destroyRef = inject(DestroyRef);
  public searchControl = new FormControl<FormControl | ''>('');
  public totalElements = 0;
  public pageSize = 20;
  public pageIndex = 0;
  public readonly pageSizeOptions = [5, 10, 20];

  public displayedColumnsWithExpand: string[] = [];
  public expandedElement: TableCharacter | null = null;

  public selectedNarutoGender: string = '';
  public selectedDemonSlayerGender: string = '';
  public selectedDemonSlayerRace: string = '';
  public selectedSexualOrientation: string = '';
  public selectedNarutoKink: string = '';
  public searchText: string = '';
  protected editingElementId: number | null = null;
  protected fullData: TableCharacter[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public characterService: CharactersService) {}

  public ngOnInit(): void {
    this.displayedColumnsWithExpand = [...this.displayedColumns, 'expand'];
    this.loadData();
  }

  public ngAfterViewInit(): void {
    this.paginator.page.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.loadData();
    });
  }

  public loadData(): void {
    this.characterService
      .getTable(this.pageIndex, this.pageSize)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (response: TableResponse) => {
          this.fullData = response.characters;
          this.filterData();
          this.totalElements = response.totalElements;
          if (this.paginator) {
            this.paginator.length = this.totalElements;
            this.paginator.pageIndex = this.pageIndex;
          }
        },
        error: (error) => console.log('Error, bro. I think its fault Backend :)', error),
      });
  }

  public filterData(): void {
    const filtered = this.fullData.filter((item) => {
      const matchesNarutoGender = this.selectedNarutoGender
        ? item.gender === this.selectedNarutoGender
        : true;
      const matchesDemonSlayerGender = this.selectedDemonSlayerGender
        ? item.genderDemonSlayer === this.selectedDemonSlayerGender
        : true;
      const matchesSearch = this.searchText
        ? item.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
          item.nameDemonSlayer.toLowerCase().includes(this.searchText.toLowerCase())
        : true;
      const narutoSexualOrientation = this.getSexualOrientation(item);
      const matchesSexualOrientation = this.selectedSexualOrientation
        ? narutoSexualOrientation === this.selectedSexualOrientation
        : true;

      const narutoKink = this.getKink(item);
      const matchesKink = this.selectedNarutoKink ? narutoKink === this.selectedNarutoKink : true;

      const matchesRaceDemonSlayer = this.selectedDemonSlayerRace
        ? item.raceDemonSlayer === this.selectedDemonSlayerRace
        : true;

      return (
        matchesNarutoGender &&
        matchesDemonSlayerGender &&
        matchesSearch &&
        matchesSexualOrientation &&
        matchesKink &&
        matchesRaceDemonSlayer
      );
    });
    this.dataSource.data = [...filtered];
  }

  getSexualOrientation(item: TableCharacter): string {
    if (item.gender === 'Male' && item.genderDemonSlayer === 'Male') return 'Gay';
    if (item.gender === 'Female' && item.genderDemonSlayer === 'Female') return 'Lesbian';
    return 'Hetero';
  }

  getKink(item: TableCharacter): string {
    if (item.raceDemonSlayer === 'Demon') return 'Teratophile';
    return 'No sexual deviations';
  }

  public onSearchChange(searchText: string): void {
      this.searchText = searchText; 
      this.filterData();
  }

  public onFilterChange(): void {
    this.filterData();
  }

  public deleteCharacter(id: number, event: Event): void {
    event.stopPropagation();

    const filteredData = this.dataSource.data.filter((character) => character.id !== id);
    this.dataSource.data = filteredData;
    this.totalElements--;
  }

  public onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadData();
  }

  public onToggleRow(element: TableCharacter): void {
    this.expandedElement = this.expandedElement === element ? null : element;
  }

  public onDeleteRow(event: { id: number; event: Event }): void {
    event.event.stopPropagation();
    const filteredData = this.dataSource.data.filter((character) => character.id !== event.id);
    this.dataSource.data = filteredData;
    this.totalElements--;
  }

  public onEditModeChange(element: TableCharacter): void {
    this.editingElementId = this.editingElementId === element.id ? null : element.id;
  }

  public onSaveChanges(updatedElement: TableCharacter): void {
    this.dataSource.data = this.dataSource.data.map((item) =>
      item.id === updatedElement.id ? updatedElement : item,
    );

    this.editingElementId = null;
  }

  public getNoDataMessage(): string {
    if (this.fullData.length === 0) {
      return 'Loading...';
    }
    if (this.dataSource.data.length === 0 && this.searchText) {
      return `No characters matching "${this.searchText}"`;
    }
    if (this.dataSource.data.length === 0) {
      const hasActiveFilters =
        this.searchText ||
        this.selectedNarutoGender ||
        this.selectedDemonSlayerGender ||
        this.selectedSexualOrientation ||
        this.selectedNarutoKink ||
        this.selectedDemonSlayerRace;

      if (hasActiveFilters) {
        return 'No characters match the selected filters. Bro, just a delete filters)';
      }

      return 'All characters have been deleted on this page';
    }
    return '';
  }

  public resetFilters(): void {
    this.selectedNarutoGender = '';
    this.selectedDemonSlayerGender = '';
    this.selectedDemonSlayerRace = '';
    this.selectedSexualOrientation = '';
    this.selectedNarutoKink = '';
    this.searchText = '';
    this.searchControl.setValue('');
    this.filterData();
  }
}
