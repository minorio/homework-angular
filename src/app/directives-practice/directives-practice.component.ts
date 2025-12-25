import { Component } from '@angular/core';
import { NgClass, NgStyle, NgIf, NgSwitch, NgFor, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'directives-practice',
  templateUrl: 'directives-practice.component.html',
  styleUrls: ['./directives-practice.component.scss'],
  standalone: true,
  imports: [NgClass, NgStyle, NgIf, NgSwitch, FormsModule, NgFor, NgForOf],
})
export class DirectivesPracticeComponent {
  classIsVisible = false;
  classNgIsVisible = false;
  styleIsVisible = false;
  styleNgIsVisible = false;

  value = 1;
  ngValue = 1;

  switchValue = 1;
  switchNgValue = 1;

  items = ['Цири', 'Геральт', 'Йен', 'Ламберт', 'Лютик'];
  newArrValue = '';
  itemsNg = ['Джонни', 'Ви', 'Элли', 'Дина', 'Джоэл'];
  newArrValueNg = '';

  toggleClass() {
    this.classIsVisible = !this.classIsVisible;
  }
  toggleClassNg() {
    this.classNgIsVisible = !this.classNgIsVisible;
  }
  toggleStyle() {
    this.styleIsVisible = !this.styleIsVisible;
  }
  toggleStyleNg() {
    this.styleNgIsVisible = !this.styleNgIsVisible;
  }
  toggleValue() {
    if (this.value) {
      this.value = 0;
    } else {
      this.value = 1;
    }
  }
  toggleNgValue() {
    if (this.ngValue) {
      this.ngValue = 0;
    } else {
      this.ngValue = 1;
    }
  }
  counterForSwitch() {
    this.switchValue = this.switchValue + 1;
  }
  // counterForNgSwitch(){
  //   this.switchNgValue = this.switchNgValue + 1
  // }

  addNewItem() {
    if (this.newArrValue) {
      this.items.push(this.newArrValue);
    }
    this.newArrValue = '';
  }
  addNewItemNg() {
    if (this.newArrValueNg) {
      this.itemsNg.push(this.newArrValueNg);
    }
    this.newArrValueNg = '';
  }
  trackItem(index: number, item: string) {
    return item;
  }
}
