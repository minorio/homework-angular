import { Component, ElementRef, AfterViewInit , ViewChild } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'shared',
  templateUrl: './shared.component.html'
})

export class SharedComponent implements AfterViewInit {
  @ViewChild("header", {static: false})
    header!: ElementRef;
  @ViewChild("content", {static: false})
    content!: ElementRef;
  @ViewChild("footer", {static: false})
    footer!: ElementRef;

  ngAfterViewInit (){
    this.header.nativeElement.style.backgroundColor = 'darkred';
    this.header.nativeElement.style.height = '100px';
    this.header.nativeElement.style.width = '400px';
    this.header.nativeElement.style.padding = '30px';

    this.content.nativeElement.style.backgroundColor = 'darkslategray';
    this.content.nativeElement.style.height = '100px';
    this.content.nativeElement.style.width = '400px';
    this.content.nativeElement.style.padding = '30px';

    this.footer.nativeElement.style.backgroundColor = 'pink';
    this.footer.nativeElement.style.height = '100px';
    this.footer.nativeElement.style.width = '400px';
    this.footer.nativeElement.style.padding = '30px';
   }
}