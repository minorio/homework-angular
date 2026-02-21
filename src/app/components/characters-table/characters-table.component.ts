import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  AfterViewInit,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort, Sort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { TableCharacter } from '../../models/table-character.model';

@Component({
  selector: 'characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
})
export class CharactersTableComponent implements AfterViewInit, OnChanges {
  @Input() public dataSource!: MatTableDataSource<TableCharacter>;
  @Input() public displayedColumns: string[] = [];
  @Input() public displayedColumnsWithExpand: string[] = [];
  @Input() public expandedElement: TableCharacter | null = null;
  @Input() public editingElementId: number | null = null;
  @Input() public searchText: string = '';
  @Input() public noDataMessage: string = 'No data available';
  @Output() public toggleRow = new EventEmitter<TableCharacter>();
  @Output() public deleteRow = new EventEmitter<{ id: number; event: Event }>();
  @Output() public editModeChange = new EventEmitter<TableCharacter>();
  @Output() public saveChanges = new EventEmitter<TableCharacter>();
  @Output() public sortChange = new EventEmitter<Sort>();
  @ViewChild(MatSort) public sort!: MatSort;
  public editForm!: FormGroup;
  public currentEditingElement: TableCharacter | null = null;

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['editingElementId'] && this.editingElementId) {
      const element = this.dataSource.data.find((item) => item.id === this.editingElementId);
      if (element) {
        this.initFormForElement(element);
      }
    }
  }

  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public initFormForElement(element: TableCharacter): void {
    this.currentEditingElement = element;
    this.editForm = new FormGroup({
      name: new FormControl(element.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/),
      ]),
      nameDemonSlayer: new FormControl(element.nameDemonSlayer, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/),
      ]),
      quoteDemonSlayer: new FormControl(element.quoteDemonSlayer, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
      descriptionDemonSlayer: new FormControl(element.descriptionDemonSlayer, [
        Validators.minLength(30),
        Validators.maxLength(300),
      ]),
    });
  }

  public onToggle(element: TableCharacter): void {
    this.toggleRow.emit(element);
  }

  public onDelete(id: number, event: Event): void {
    this.deleteRow.emit({ id, event });
  }

  public onEditMode(element: TableCharacter): void {
    this.editModeChange.emit(element);
  }

  public onSave(): void {
    if (this.editForm && this.editForm.valid && this.currentEditingElement) {
      const updatedValues = this.editForm.value;
      const updatedElement = {
        ...this.currentEditingElement,
        name: updatedValues.name,
        nameDemonSlayer: updatedValues.nameDemonSlayer,
        quoteDemonSlayer: updatedValues.quoteDemonSlayer,
        descriptionDemonSlayer: updatedValues.descriptionDemonSlayer,
      };

      this.saveChanges.emit(updatedElement);
    }
  }

  public isExpanded(element: TableCharacter): boolean {
    return this.expandedElement === element;
  }
}
