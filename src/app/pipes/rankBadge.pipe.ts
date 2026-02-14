import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'rankBadge' })
export class RankBadgePipe implements PipeTransform {
  transform(rank: string | null): Record<string, boolean> {
    return {
      'rank--academyStudent': rank === 'Academy Student',
      'rank--genin': rank === 'Genin',
      'rank--chunin': rank === 'Chūnin',
      'rank--tokubetsuJonin': rank === 'Tokubetsu Jōnin',
      'rank--jonin': rank === 'Jōnin',
      'rank--anbu': rank === 'Anbu',
      'rank--kage': rank === 'Kage',
      'rank--default': !rank,
    };
  }
}