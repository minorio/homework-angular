import { Directive, ElementRef, HostBinding, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({ selector: `[customNgStyle]`, standalone: true })
export class CustomNgStyleDirective {
  @Input() customNgStyle: Record<string, string | number> = {};
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges) {
    if (!changes['customNgStyle']) return;

    Object.entries(this.customNgStyle).forEach(([key, value]) => {
      this.renderer.setStyle(this.elementRef.nativeElement, key, value);
    });
  }
}
