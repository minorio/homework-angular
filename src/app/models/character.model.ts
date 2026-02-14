export interface CharactersResponse {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface Character {
  id: number;
  name: string;
  images: string[] | [];
  debut: Debut;
  personal: Personal;
  rank?: Rank;
  affiliation?: string[];
}

export interface Personal {
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

export interface Rank {
  ninjaRank?: Partial<Record<NinjaRankPeriod, string>>;
}

export interface Debut {
  anime: string;
  manga: string;
}
