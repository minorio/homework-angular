import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Character } from '../models/character.model';

@Pipe({
  name: 'asyncPipe',
  pure: false,
  standalone: true,
})

export class AsyncPipe implements PipeTransform {
  private latestValue: Character[] | null = null;
  private sub: Subscription | null = null;
  private lastObs$: Observable<Character[]> | null = null;

  constructor(private cdr: ChangeDetectorRef) { }

  transform(obs$: Observable<Character[]> | null): Character[] | null {
    if (obs$ === this.lastObs$) {
      return this.latestValue;
    }
    this.clear();
    this.lastObs$ = obs$;

    if (obs$) {
      this.sub = obs$.subscribe((value) => {
        this.latestValue = value;
        this.cdr.markForCheck();
      });
    }

    return this.latestValue;
  }
  ngOnDestroy(): void {
    this.clear();
  }

  private clear(): void {
    this.sub?.unsubscribe();
    this.sub = null;
    this.latestValue = null;
  }
}
