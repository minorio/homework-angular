export interface CharactersResponse {
  characters: Character[];
  currentPage: number;
  pageSize: number;
  total: number;
}

export interface Character {
  id: number;
  name: string;
  images: string[];
  debut?: Debut;
  personal: Personal;
  rank?: Rank;
  affiliation?: string[];
}

export interface Personal {
  status?: string | undefined;
  birthdate?: string;
  sex?: string;
  clan?: string;
  bloodType?: string;
  occupation?: string[];
  team?: string[];
  age?: Record<string, string>;
}

export interface Rank {
  ninjaRank?: Record<string, string>;
}

export interface Debut {
  anime?: string;
  manga?: string;
}
