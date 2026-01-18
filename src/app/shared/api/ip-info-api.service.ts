import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IIpInfoResponse, IMapeedIpInfo } from '../models/ipInfo.model';

@Injectable({
  providedIn: 'root',
})
export class IpInfoApiService {
  constructor(private http: HttpClient) {}

  getIpInfo(ip: string): Observable<IMapeedIpInfo> {
    return this.http.get<IIpInfoResponse>(`https://ipinfo.io/${ip}/geo`).pipe(
      map((data) => ({
        location: `${data.country}, ${data.city}`,
        timezone: data.timezone,
        ip: data.ip,
      })),
    );
  }
}
