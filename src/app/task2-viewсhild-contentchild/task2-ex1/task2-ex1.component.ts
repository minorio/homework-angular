import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedComponent } from "../shared/shared.component";


@Component({
  selector: 'task2-ex1',
  templateUrl: 'task2-ex1.component.html',
  styleUrls: ['./task2-ex1.component.scss'],
  standalone: true,
  imports: [SharedComponent],
})

export class Task2Ex1Component {
  @ViewChild('content1') content1!: ElementRef;

  ngAfterViewInit() {
    this.content1.nativeElement.style.background = 'yellow';
    this.content1.nativeElement.style.color = 'white';
    this.content1.nativeElement.style.fontSize = '30px';
    this.content1.nativeElement.style.padding = '20px';
    this.content1.nativeElement.style.hover = '20px';
  }
}