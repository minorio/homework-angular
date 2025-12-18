import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'task1-ex2-child',
  templateUrl: 'task1-ex2-child.component.html',
  styleUrls: ['./task1-ex2-child.component.scss'],
  standalone: true,
})
export class Task1Ex2ChildComponent {
   _parentInput: string = '';
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

  @Input()
    set parentInput(value:string) {
    if (!value) {
      this._parentInput = '';
      return;
    }
    
    let valueTrimmed = value.trim();

    if (valueTrimmed.length < this.minLength || valueTrimmed.length > this.maxLength) {
      alert('Текст слишком короткий или слишком длинный!');
      this._parentInput = '';
      return;
    }

    if (!this.checkRussianLetters(valueTrimmed)) {
      alert('Все кроме русских букв считается запрещенным!');
     this._parentInput = '';
      return;
    }

    if (this.checkBannedWords(valueTrimmed)) {
      alert('В тексте есть запрещённые слова!');
      this._parentInput = '';
      return;
    }
    this._parentInput = valueTrimmed
  }

  get parentInput() { return this._parentInput; }

  addBigWord() {
    if (!this.parentInput) return;
    this.addWord.emit('Большой ' + this.parentInput);
  }
  addSmallWord() {
    if (!this.parentInput) return;
    this.addWord.emit('Маленький ' + this.parentInput);
  }
}
