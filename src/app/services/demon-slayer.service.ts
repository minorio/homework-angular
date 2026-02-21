import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DemonSlayerService {
  constructor(private http: HttpClient) {}
  private readonly demonSlayerUrl = '/api/v1/characters'
  getCharacters(page?: number, limit: number = 20) {
        let params: any = { limit: limit.toString() };
    if (page !== undefined) {
      params.page = (page + 1).toString(); 
    }
    return this.http.get<any>(this.demonSlayerUrl, { params })
     .pipe(map((res) => ({
        characters: res.content,
        pagination: res.pagination
      })));
  }
}