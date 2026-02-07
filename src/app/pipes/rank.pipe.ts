import { Pipe, PipeTransform } from '@angular/core';
import { Rank } from '../models/character.model';

@Pipe({
  name: 'rank',
  standalone: true,
  pure: true
})
export class RankPipe implements PipeTransform {
  transform(rank?: Rank): string | null {
    return rank?.ninjaRank?.['Gaiden'] ?? rank?.ninjaRank?.['Part I'] ?? '';
  }
}
