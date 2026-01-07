import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({ selector: `[customNgClass]`, standalone: true })
export class CustomNgClassDirective {
  @Input() customNgClass: Record<string, boolean | undefined> = {};
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges) {
    if (!changes['customNgClass']) return;

    Object.entries(this.customNgClass).forEach(([className, boolean]) => {
      if (boolean) {
        this.renderer.addClass(this.elementRef.nativeElement, className);
      } else {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
      }
    });
  }
}
