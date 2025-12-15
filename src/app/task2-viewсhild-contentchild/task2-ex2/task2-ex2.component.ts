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
  @ViewChild('content') content!: ElementRef;

  ngAfterViewInit() {
    this.content.nativeElement.style.color = 'orange';
    this.content.nativeElement.style.border = '5px solid orange';
  }
}