import { ChangeDetectionStrategy, Component, Inject, inject, Input, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule, MatHint, MatLabel } from '@angular/material/form-field';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Character } from '../../models/character.model';

@Component({
  selector: 'person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
  ],
})
export class PersonDialogComponent {
  protected form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public person: Character,
    private dialogRef: MatDialogRef<PersonDialogComponent>,
  ) {
    this.form = new FormGroup({
      name: new FormControl(person.name),
      clan: new FormControl(person.personal?.clan || ''),
      birthdate: new FormControl(person.personal?.birthdate || ''),
      sex: new FormControl(person.personal?.sex || ''),
      bloodType: new FormControl(person.personal?.bloodType || ''),
    });
  }

  protected savePerson(): void {
    const updated = {
      ...this.person,
      name: this.form.value.name,
      personal: {
        ...this.person.personal,
        clan: this.form.value.clan,
        birthdate: this.form.value.birthdate,
        sex: this.form.value.sex,
        bloodType: this.form.value.bloodType,
      },
    };
    this.dialogRef.close(updated);
  }

  protected cancel(): void {
    this.dialogRef.close();
  }
}
