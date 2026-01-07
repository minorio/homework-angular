import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomNgStyleDirective } from './directives/customStyle.directive';
import { CustomNgClassDirective } from './directives/customClass.directive';
import { CustomNgIfDirective } from './directives/customNgIf.directive';
import { CustomNgSwitchDirective } from './directives/customNgSwitch/customNgSwitch.directive';
import { CustomNgSwitchCaseDirective } from './directives/customNgSwitch/customNgSwitchCase.directive';
import { CustomNgForDirective } from './directives/customNgFor.directive';

@Component({
  selector: 'custom-directive',
  templateUrl: 'custom-directive.component.html',
  styleUrls: ['./custom-directive.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    CustomNgStyleDirective,
    CustomNgClassDirective,
    CustomNgIfDirective,
    CustomNgSwitchDirective,
    CustomNgSwitchCaseDirective,
    CustomNgForDirective,
  ],
})
export class CustomDirectiveComponent {
  classIsVisible = false;
  styleIsVisible = false;

  condition = false;
  switchNgValue = 1;

  items = ['Цири', 'Геральт', 'Йен', 'Ламберт', 'Лютик'];
  newArrValue = '';

  toggleClass() {
    this.classIsVisible = !this.classIsVisible;
  }
  toggleStyle() {
    this.styleIsVisible = !this.styleIsVisible;
  }
  toggleValue() {
    this.condition = !this.condition;
  }

  counterForNgSwitch() {
    this.switchNgValue++;
  }

  addNewItem() {
    if (this.newArrValue) {
      this.items = [...this.items, this.newArrValue];
    }
    this.newArrValue = '';
  }
}
