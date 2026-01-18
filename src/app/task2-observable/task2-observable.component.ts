import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'task2-observable',
  templateUrl: 'task2-observable.component.html',
  styleUrls: ['./task2-observable.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class Task2ObservableComponent implements OnInit {
  private subscriber: Subscriber<string> | null = null;
  myObservable$: Observable<string> | null = null;

  currentValue: string | null = null;
  error: string | null = null;

  ngOnInit() {
    this.myObservable$ = new Observable<string>((sub) => {
      this.subscriber = sub;
    });

    this.myObservable$.subscribe({
      next: (value) => {
        this.currentValue = value;
      },
      error: (error) => {
        this.error = error;
      },
    });
  }

  sendValue(value: string): void {
    if (!this.subscriber) return;
    try {
      if (value === 'CENSORED') {
        throw new Error('Ошибка! Обнаружено запрещённое слово !!!');
      }
      this.subscriber.next(value);
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.subscriber.error(error.message);
        console.error(error.message);
      } else {
        console.error('Неизвестная ошибочка!');
      }
    }
  }

  finishObservable(): void {
    if (!this.subscriber) return;
    this.subscriber.complete();
  }
}
