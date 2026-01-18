import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MemeApiService } from '../shared/api/meme-api.service';
import { IMemeResponse } from '../shared/models/meme.model';
import { IMapeedIpInfo } from '../shared/models/ipInfo.model';
import { IJokeResponse } from '../shared/models/joke.model';
import { JokeApiService } from '../shared/api/joke-api.service';
import { IpInfoApiService } from '../shared/api/ip-info-api.service';

@Component({
  selector: 'task1-cards',
  templateUrl: 'task1-cards.component.html',
  styleUrls: ['./task1-cards.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class Task1CardsComponent implements OnInit {
  memeApi: IMemeResponse | null = null;
  jokeItem$: Observable<IJokeResponse> | null = null;
  ipInfo$: Observable<IMapeedIpInfo> | null = null;
  currentIp: string = '';

  constructor(
    private cdr: ChangeDetectorRef,
    public memeApiService: MemeApiService,
    public jokeApiService: JokeApiService,
    public ipInfoApiService: IpInfoApiService,
  ) {}

  ngOnInit() {
    this.memeApiService.getMeme().subscribe((data) => {
      this.memeApi = data;
      this.cdr.detectChanges();
    });
    this.jokeItem$ = this.jokeApiService.getJoke();
  }

  checkCurrentIp(): void {
    if (this.currentIp) {
      this.ipInfo$ = this.ipInfoApiService.getIpInfo(this.currentIp);
    }
  }
  refreshResponseMemeImg(): void {
    this.memeApiService.getMeme().subscribe((data) => {
      this.memeApi = data;
      this.cdr.detectChanges();
    });
  }
  refreshResponseJoke(): void {
    this.jokeItem$ = this.jokeApiService.getJoke();
  }
}
