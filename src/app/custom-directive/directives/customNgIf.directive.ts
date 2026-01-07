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

@Directive({ selector: `[customNgIf]`, standalone: true })
export class CustomNgIfDirective {
  @Input() set customNgIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
