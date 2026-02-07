import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { PersonDialogComponent } from '../person-dialog/person-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { PersonService } from '../../services/person.service';
import { RankPipe } from '../../pipes/rank.pipe';
import { LabelValuePipe } from '../../pipes/labelValue.pipe';
import { Character } from '../../models/character.model';

@Component({
  selector: 'person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardTitle,
    MatCard,
    MatCardSubtitle,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatButtonModule,
    RankPipe,
    LabelValuePipe,
  ],
})
export class PersonCardComponent implements OnInit {
  @Input() person: Character | null = null;
  private dialog = inject(MatDialog);

  constructor(public personService: PersonService) {}

  ngOnInit(): void {}

  protected openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const ref = this.dialog.open(PersonDialogComponent, {
      width: '400px',
      data: this.person,
      enterAnimationDuration,
      exitAnimationDuration,
    });

    ref.afterClosed().subscribe((result) => {
      if (result) {
        this.personService.updatePerson(result);
      }
    });
  }
}
