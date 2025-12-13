import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'task3',
  templateUrl: 'task3.component.html',
  styleUrls: ['./task3.component.scss'],
  standalone: true,
})

export class Task3Component implements  DoCheck, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked{
   constructor(){ console.log("constructor"); }
   @Input() forOnChanges = "";
   @ViewChild("triggerView") triggerView!: ElementRef;

    triggerOnChanges() {

      this.forOnChanges += "kakoi-to text";
      console.log(`event for OnChanges`, this.forOnChanges);
    }
    ngOnChanges() {
      console.log(`OnChanges`);
    }
    ngDoCheck() {
      console.log(`ngDoCheck`);
    }
    triggerViewInit() {
      this.triggerView.nativeElement.style.fontSize = "30px"
    }
    ngAfterViewInit() {  
      // console.log(`ngAfterViewInit`);
    }
    ngAfterViewChecked() {  
      // console.log(`ngAfterViewChecked`);
    }
    ngAfterContentInit() {
      // console.log(`ngAfterContentInit`);
    }
    ngAfterContentChecked() { 
      // console.log(`ngAfterContentChecked`);
    }
}