import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  public readonly page$ = new BehaviorSubject<number>(1);
  public readonly limit$ = new BehaviorSubject<number>(12);
  public get currentPage(): number {
    return this.page$.value;
  }
  public get currentLimit(): number {
    return this.limit$.value;
  }

  public setPage(page: number): void {
    if (page >= 1) {
      this.page$.next(page);
    }
  }

  public nextPage(): void {
    this.setPage(this.currentPage + 1);
  }

  public prevPage(): void {
    this.setPage(this.currentPage - 1);
  }

  public setLimit(limit: number): void {
    this.limit$.next(limit);
    this.reset();
  }

  public reset(): void {
    this.page$.next(1);
  }
}
