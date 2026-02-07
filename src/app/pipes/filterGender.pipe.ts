import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character.model';

@Pipe({
  name: 'filterByGender',
  standalone: true,
  pure: true,
})

export class FilterGenderPipe implements PipeTransform {
  transform(list: Character[] | null, sex: string): Character[] {
    if (!list) return [];
    return list.filter((person) => person.personal.sex?.toLowerCase() === sex.toLowerCase());
  }
}
