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

@Directive({ selector: `[customNgFor][customNgForOf]`, standalone: true })
export class CustomNgForDirective {
  @Input()
  set customNgForOf(arr: any[]) {
    this.viewContainer.clear();
    arr.forEach((item, index: number) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: item,
        index: index,
        odd: index % 2 === 1,
        even: index % 2 === 0,
        last: index === arr.length - 1,
        first: index === 0,
      });
    });
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
}
