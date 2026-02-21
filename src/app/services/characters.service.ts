import { Injectable } from '@angular/core';
import { NarutoService } from './naruto.service';
import { DemonSlayerService } from './demon-slayer.service';
import { combineLatest, map, Observable } from 'rxjs';
import { DemonSlayerCharacter } from '../models/demon-slayer.model';
import { TableCharacter } from '../models/table-character.model';
import { NarutoCharacter } from '../models/naruto.model';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  constructor(
    private narutoService: NarutoService,
    private demonSlayerService: DemonSlayerService,
  ) {}

  public getTable(
    page: number = 1,
    limit: number = 20,
  ): Observable<{ characters: TableCharacter[]; totalElements: number }> {
    return combineLatest([
      this.narutoService.getCharacters(page, limit),
      this.demonSlayerService.getCharacters(page, limit),
    ]).pipe(
      map(([narutoCharacters, demonSlayerResponse]) => {
        const characters = this.mergeObject(narutoCharacters, demonSlayerResponse.characters);
        return {
          characters: characters,
          totalElements: demonSlayerResponse.pagination.totalElements,
        };
      }),
    );
  }

  private mergeObject(
    narutoCharacter: NarutoCharacter[],
    demonSlayerCharacter: DemonSlayerCharacter[],
  ): TableCharacter[] {
    const tableData: TableCharacter[] = [];
    const maxLength = Math.max(narutoCharacter.length, demonSlayerCharacter.length);
    for (let i = 0; i < maxLength; i++) {
      const narutoChar = narutoCharacter[i];
      const demonSlayerChar = demonSlayerCharacter[i];
      if (narutoChar && demonSlayerChar) {
        tableData.push({
          id: narutoChar.id,
          images: narutoChar.images?.length
            ? [narutoChar.images[0]]
            : ['https://placehold.co/600x400?text=No+Photo'],
          name: narutoChar.name,
          gender: narutoChar.personal?.sex || 'Unknown',
          imagesDemonSlayer: demonSlayerChar.img,
          nameDemonSlayer: demonSlayerChar.name,
          genderDemonSlayer: demonSlayerChar.gender,
          raceDemonSlayer: demonSlayerChar.race,
          quoteDemonSlayer: demonSlayerChar.quote,
          ageDemonSlayer: demonSlayerChar.age,
          descriptionDemonSlayer: demonSlayerChar.description,
        });
      }
    }
    return tableData;
  }
}
