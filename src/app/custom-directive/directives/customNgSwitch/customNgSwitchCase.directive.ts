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

@Directive({ selector: `[customNgSwitchCase]`, standalone: true })
export class CustomNgSwitchCaseDirective {
  @Input() set customNgSwitchCase(value: any) {
    this.customNgSwitch.addCase(value, this.templateRef);
  }

  constructor(
    private customNgSwitch: CustomNgSwitchDirective,
    private templateRef: TemplateRef<any>
  ) {}
}
