export interface NarutoCharactersResponse {
  characters: NarutoCharacter[];
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface NarutoCharacter {
  id: number;
  name: string;
  images: string[] | [];
  debut: NarutoDebut;
  personal: NarutoPersonal;
  rank?: NarutoRank;
  affiliation?: string[];
}
export interface NarutoPersonal {
  status?: string;
  birthdate?: string;
  sex?: string;
  clan?: string;
  bloodType?: string;
  occupation?: string[] | string;
  team?: string[] | string;
  age?: Record<string, string>;
}
export type NinjaRankPeriod =
  | 'Part II'
  | 'Part I'
  | 'Blank Period'
  | 'Gaiden'
  | 'Boruto Manga';

export interface NarutoRank {
  ninjaRank?: Partial<Record<NinjaRankPeriod, string>>;
}

export interface NarutoDebut {
  anime: string;
  manga: string;
}
