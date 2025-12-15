import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task1-ex2-child',
  templateUrl: 'task1-ex2-child.component.html',
  styleUrls: ['./task1-ex2-child.component.scss'],
  standalone: true,
})
export class Task1Ex2ChildComponent {
  @Input() parentInput = '';
  @Output() addWord = new EventEmitter<string>();

  forbiddenWords = ['заяц', 'лиса', 'капибара'];
  maxLength = 14;
  minLength = 4;

  checkRussianLetters(value: string): boolean {
    return /^[а-яё]+$/i.test(value);
  }

  checkBannedWords(value: string): boolean {
    return this.forbiddenWords.some(word => value.toLowerCase().includes(word));
  }

  addBigWord() {
    let value = this.parentInput.trim();

    if (value.length < this.minLength || value.length > this.maxLength) {
      alert('Текст слишком короткий или слишком длинный!');
      return;
    }

    if (!this.checkRussianLetters(value)) {
      alert('Все кроме русских букв считается запрещенным!');
      return;
    }

    if (this.checkBannedWords(value)) {
      alert('В тексте есть запрещённые слова!');
      return;
    }

    this.addWord.emit('Большой ' + value);
  }
  addSmallWord() {
    let value = this.parentInput.trim();

    if (value.length < this.minLength || value.length > this.maxLength) {
      alert('Текст слишком короткий или слишком длинный!');
      return;
    }

    if (!this.checkRussianLetters(value)) {
      alert('Все кроме русских букв считается запрещенным!');
      return;
    }

    if (this.checkBannedWords(value)) {
      alert('В тексте есть запрещённые слова!');
      return;
    }

    this.addWord.emit('Маленький ' + value);
  }
}
