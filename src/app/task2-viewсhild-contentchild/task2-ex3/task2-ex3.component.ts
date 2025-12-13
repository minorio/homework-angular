import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedComponent } from "../shared/shared.component";


@Component({
  selector: 'task2-ex3',
  templateUrl: 'task2-ex3.component.html',
  styleUrls: ['./task2-ex3.component.scss'],
  standalone: true,
  imports: [SharedComponent],
})

export class Task2Ex3Component {
  @ViewChild('content3') content3!: ElementRef;

  ngAfterViewInit() {
    this.content3.nativeElement.style.background = 'red';
    this.content3.nativeElement.style.color = 'white';
    this.content3.nativeElement.style.fontSize = '30px';
    this.content3.nativeElement.style.padding = '20px';
    this.content3.nativeElement.style.hover = '20px';
  }

}