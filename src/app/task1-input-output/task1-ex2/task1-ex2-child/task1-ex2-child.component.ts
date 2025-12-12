import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'task1-ex2-child',
  templateUrl: 'task1-ex2-child.component.html',
  styleUrls: ['./task1-ex2-child.component.scss'],
  standalone: true,
})
export class Task1Ex2ChildComponent {
  @Output() addWord = new EventEmitter<string>();
  send(value: string) {
    const regex = /^[а-яё]+$/i;
    if (!regex.test(value)) {
      alert('Все кроме русских букв считается запрещенным!');
      return;
    }
    const valLower = value.toLowerCase();
    if (valLower.includes('заяц')) {
      alert('Слово заяц запрещено для использования!');
    } else if (valLower.includes('лиса')) {
      alert('Слово лиса запрещено для использования!');
    } else if (valLower.includes('капибара')) {
      alert('Слово капибара запрещено для использования!');
    } else {
      console.log('В строке нет запрещенных слов');
      this.addWord.emit(value);
    }
  }
}
