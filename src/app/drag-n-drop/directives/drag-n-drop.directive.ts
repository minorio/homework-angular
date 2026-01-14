import { Directive, ElementRef, HostListener, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({ selector: `[drug]`, standalone: true })
export class DrugNDropDirective {
  @HostListener("mouseup") onMouseUp() {
      
    }

}
