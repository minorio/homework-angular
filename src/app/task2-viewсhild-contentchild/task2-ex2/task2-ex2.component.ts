import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedComponent } from "../shared/shared.component";


@Component({
  selector: 'task2-ex2',
  templateUrl: 'task2-ex2.component.html',
  styleUrls: ['./task2-ex2.component.scss'],
  standalone: true,
  imports: [SharedComponent],
})

export class Task2Ex2Component {
  @ViewChild('content2') content2!: ElementRef;

  ngAfterViewInit() {
    this.content2.nativeElement.style.background = 'blue';
    this.content2.nativeElement.style.color = 'white';
    this.content2.nativeElement.style.fontSize = '30px';
    this.content2.nativeElement.style.padding = '20px';
    this.content2.nativeElement.style.hover = '20px';
  }
}