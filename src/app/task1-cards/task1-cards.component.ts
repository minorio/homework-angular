import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'task1-cards',
  templateUrl: 'task1-cards.component.html',
  styleUrls: ['./task1-cards.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class Task1CardsComponent implements OnInit {
  memeApi: any = null;
  jokeItem$: Observable<any> | undefined;
  ipInfo$: Observable<any> | undefined;
  currentIp = '';
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get<any>('https://meme-api.com/gimme/shitpost_ru').subscribe((data) => this.memeApi = data);
    this.jokeItem$ = this.httpClient.get<any>('https://official-joke-api.appspot.com/random_joke');
  }

  checkCurrentIp() {
    if (this.currentIp) {
      this.ipInfo$ = this.httpClient.get<any>(`https://ipinfo.io/${this.currentIp}/geo`).pipe(
        map((data) => ({
          location: `${data.country}, ${data.city}`,
          timezone: data.timezone,
          ip: data.ip,
        }))
      );
    }
  }
  refreshResponseMemeImg() {
    this.httpClient.get<any>('https://meme-api.com/gimme/shitpost_ru').subscribe((data) => {
      this.memeApi = data;
    });
  }
  refreshResponseJoke() {
    this.jokeItem$ = this.httpClient.get<any>('https://official-joke-api.appspot.com/random_joke');
  }
}
