import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges} from '@angular/core';


@Component({
  selector: 'task3-child',
  templateUrl: 'task3-child.component.html',
  styleUrls: ['./task3-child.component.scss'],
  standalone: true,
})

export class Task3ChildComponent
  implements
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentInit,
    AfterContentChecked{

  constructor() {
    console.log('constructor');
  }

  @Input() forOnChanges = '';

  ngOnChanges() {
    console.log('ngOnChanges');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
}