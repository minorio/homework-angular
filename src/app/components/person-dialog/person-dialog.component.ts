import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Character } from '../../models/character.model';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
  ],
})

export class PersonDialogComponent {
  protected form: FormGroup;
  protected rankOptions: string[] = [
    'Academy Student',
    'Genin',
    'Chūnin',
    'Tokubetsu Jōnin',
    'Jōnin',
    'Anbu',
    'Kage',
  ];
  constructor(
    @Inject(MAT_DIALOG_DATA) public person: Character,
    private dialogRef: MatDialogRef<PersonDialogComponent>,
  ) {
    const currentRank = person.rank?.ninjaRank
      ? Object.values(person.rank.ninjaRank).find(Boolean)
      : '';

    this.form = new FormGroup({
      name: new FormControl(person.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/),
      ]),
      rank: new FormControl(currentRank || null),
      clan: new FormControl(person.personal?.clan || '', [
        Validators.maxLength(20),
        Validators.pattern(/^[a-zA-Zа-яА-ЯёЁ\s-]*$/),
      ]),
      birthdate: new FormControl(
        person.personal?.birthdate || '',
        Validators.pattern(
          /^(January|February|March|April|May|June|July|August|September|October|November|December)\s([1-9]|[12]\d|3[01])$/i,
        ),
      ),
      sex: new FormControl(person.personal?.sex || null),
      bloodType: new FormControl(person.personal?.bloodType || null),
    });
  }

  protected savePerson(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const updated = {
      ...this.person,
      name: this.form.value.name,
      rank: {
        ninjaRank: {
          'Part II': this.form.value.rank,
        },
      },
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
