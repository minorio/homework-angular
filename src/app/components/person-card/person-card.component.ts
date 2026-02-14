import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
} from '@angular/material/card';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PersonDialogComponent } from '../person-dialog/person-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { PersonService } from '../../services/person.service';
import { LabelValuePipe } from '../../pipes/labelValue.pipe';
import { Character, NinjaRankPeriod, Rank } from '../../models/character.model';
import { RankBadgePipe } from '../../pipes/rankBadge.pipe';

const RANK_PERIOD: NinjaRankPeriod[] = [
  'Part II',
  'Part I',
  'Blank Period',
  'Gaiden',
  'Boruto Manga',
];

@Component({
  selector: 'person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCardTitle,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButtonModule,
    LabelValuePipe,
    RankBadgePipe,
    MatCardSubtitle,
  ],
})
export class PersonCardComponent {
  @Input() person: Character | null = null;
  private readonly dialog = inject(MatDialog);

  constructor(private readonly personService: PersonService) {}

  protected openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const ref: MatDialogRef<PersonDialogComponent, Character> = this.dialog.open(
      PersonDialogComponent,
      {
        width: '400px',
        data: this.person,
        enterAnimationDuration,
        exitAnimationDuration,
      },
    );

    ref.afterClosed().subscribe((result?: Character) => {
      if (result) {
        this.personService.updatePerson(result);
      }
    });
  }
  public getRankValue(rank?: Rank): string | null {
    if (!rank?.ninjaRank) return null;
    const foundKey = RANK_PERIOD.find((key) => !!rank.ninjaRank?.[key]);
    return foundKey ? (rank.ninjaRank[foundKey] as string) : null;
  }
}
