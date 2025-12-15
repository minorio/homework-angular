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
  @ViewChild('content') content!: ElementRef;

  ngAfterViewInit() {
    this.content.nativeElement.style.color = 'black';
    this.content.nativeElement.style.border = '5px solid black';
  }
}