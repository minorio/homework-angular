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
  @ViewChild('content') content!: ElementRef;

  ngAfterViewInit() {
    this.content.nativeElement.style.color = 'silver';
    this.content.nativeElement.style.border = '5px solid silver';
  }
}