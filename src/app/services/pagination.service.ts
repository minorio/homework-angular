import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class PaginationService {
  page$ = new BehaviorSubject(1);
  limit$ = new BehaviorSubject(12);

  setPage(page: number): void {
    this.page$.next(page);
  }

  setLimit(limit: number): void {
    this.limit$.next(limit);
  }
}
