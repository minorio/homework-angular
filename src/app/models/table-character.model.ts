 export interface TableCharacter{
  id: number;
  images: string[] | []
  name: string;
  gender: string;
  imagesDemonSlayer: string;
  nameDemonSlayer: string;
  quoteDemonSlayer: string;
  genderDemonSlayer: string;
  raceDemonSlayer: string;
  ageDemonSlayer: number;
  descriptionDemonSlayer: string;
 }
 export interface TableResponse {
  characters: TableCharacter[];
  totalElements: number;
}