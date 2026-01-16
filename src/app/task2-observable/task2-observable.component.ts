import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'task2-observable',
  templateUrl: 'task2-observable.component.html',
  styleUrls: ['./task2-observable.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class Task2ObservableComponent {
  inputValue = '';
  subscriber?: Subscriber<string>;
  myObservable$ = new Observable<string>((sub) => {
    this.subscriber = sub;
  });

  onInput(value: string) {
    this.inputValue = value;

    if (this.inputValue === 'CENSORED') {
      this.subscriber?.error('Ошибка! Обнаружено запрещённое слово !!!');
      return;
    }

    this.subscriber?.next(this.inputValue);
  }

  finishObservable() {
    this.subscriber?.complete();
  }
}
