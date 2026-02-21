import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelectModule } from '@angular/material/select';
import { MatFabButton } from '@angular/material/button';

@Component({
  selector: 'characters-filters',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOption,
    FormsModule,
    MatFabButton,
  ],
  templateUrl: './characters-filters.component.html',
  styleUrls: ['characters-filters.component.scss'],
})
export class CharactersFiltersComponent {
  @Input() public selectedDemonSlayerGender: string = '';
  @Input() public selectedNarutoGender: string = '';
  @Input() public selectedSexualOrientation: string = '';
  @Input() public selectedNarutoKink: string = '';
  @Input() public selectedDemonSlayerRace: string = '';
  @Input() public searchText: string = '';

  @Output() public selectedNarutoGenderChange = new EventEmitter<string>();
  @Output() public selectedDemonSlayerGenderChange = new EventEmitter<string>();
  @Output() public selectedSexualOrientationChange = new EventEmitter<string>();
  @Output() public selectedNarutoKinkChange = new EventEmitter<string>();
  @Output() public selectedDemonSlayerRaceChange = new EventEmitter<string>();
  @Output() public searchTextChange = new EventEmitter<string>();
  @Output() public filterChange = new EventEmitter<void>();
  @Output() public resetFiltersClick = new EventEmitter<void>();

  public onSearchChange(): void {
    this.searchTextChange.emit(this.searchText);
    this.filterChange.emit();
  }

  public onFilterChange(): void {
    this.selectedNarutoGenderChange.emit(this.selectedNarutoGender);
    this.selectedDemonSlayerGenderChange.emit(this.selectedDemonSlayerGender);
    this.selectedSexualOrientationChange.emit(this.selectedSexualOrientation);
    this.selectedNarutoKinkChange.emit(this.selectedNarutoKink);
    this.selectedDemonSlayerRaceChange.emit(this.selectedDemonSlayerRace);
    this.filterChange.emit();
  }

  public get hasActiveFilters(): boolean {
    return !!(
      this.searchText ||
      this.selectedNarutoGender ||
      this.selectedDemonSlayerGender ||
      this.selectedSexualOrientation ||
      this.selectedNarutoKink ||
      this.selectedDemonSlayerRace
    );
  }

  public resetFilters(): void {
    this.resetFiltersClick.emit();
  }
}
