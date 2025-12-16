import { Component } from '@angular/core';
import { Task3ChildComponent } from "./task3-child/task3-child.component";


@Component({
  selector: 'task3',
  templateUrl: 'task3.component.html',
  styleUrls: ['./task3.component.scss'],
  standalone: true,
  imports: [Task3ChildComponent],
})

export class Task3Component{
  parentValue = '';
  showContent = true;

  triggerOnChanges() {
    this.parentValue = this.parentValue + ' change';
  }

  triggerDoCheck() {
    this.parentValue = this.parentValue;
  }

  triggerContentChecked() {
    this.showContent = !this.showContent;
  }

  triggerViewChecked() {
    this.showContent = this.showContent;
  }
}