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

@Directive({ selector: `[customNgSwitch]`, standalone: true })
export class CustomNgSwitchDirective {
  cases = new Map<any, TemplateRef<any>>();
  currentValue: any;
  defaultTemplate?: TemplateRef<any>;

  @Input() set customNgSwitch(value: any) {
    this.currentValue = value;
    this.updateView();
  }

  constructor(private viewContainer: ViewContainerRef) {}

  addCase(caseValue: any, templateRef: TemplateRef<any>) {
    this.cases.set(caseValue, templateRef);
    this.updateView();
  }

  updateView() {
    this.viewContainer.clear();
    const template = this.cases.get(this.currentValue)
      ? this.cases.get(this.currentValue)
      : this.defaultTemplate;
    if (template) {
      this.viewContainer.createEmbeddedView(template);
    }
  }

  notMatch(template: TemplateRef<any>) {
    this.viewContainer.clear();
    this.defaultTemplate = template;
    this.updateView();
  }
}
