import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'favourite-component',
  templateUrl: './favourite-component.component.html',
  styleUrls: ['./favourite-component.component.css'],
  inputs: ['isSelected'],
  styles:[
    `
    .bi{
    color: black
}`
  ]
})
export class FavouriteComponentComponent implements OnInit {
 //@Input() isSelected:boolean = true;
  @Input('isSelected') isFavourite: boolean = true;
  @Output('change') change = new EventEmitter();
   //isSelected:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onCLick(){
    this.isFavourite=!this.isFavourite;
    let someObject = {
           color:'red'
    }
   // this.change.emit(this.isFavourite);
    this.change.emit(someObject);
  }
  
}
