import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class PaginationService {
  public page$ = new BehaviorSubject(1);
  public limit$ = new BehaviorSubject(12);

  public setPage(page: number): void {
    this.page$.next(page);
  }

  public setLimit(limit: number): void {
    this.limit$.next(limit);
  }
}
