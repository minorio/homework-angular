import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { CustomNgSwitchDirective } from './customNgSwitch.directive';

@Directive({ selector: `[customNgSwitchDefault]`, standalone: true })
export class CustomNgSwitchDefaultDirective {
  constructor(
    private customNgSwitch: CustomNgSwitchDirective,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
    this.viewContainer.clear();
    this.customNgSwitch.notMatch(this.templateRef);
  }
}
