import { Component } from '@angular/core';


@Component({
  selector: 'example4',
  templateUrl: 'example4.component.html',
  styleUrls: ['./example4.component.scss'],
  standalone: true,
})

export class Example1 {
  result = "";
    addWord(value:string){
      this.result = 'Большой ' + value;
       console.log(this.result)
    }
}