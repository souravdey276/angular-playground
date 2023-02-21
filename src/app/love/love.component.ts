import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css']
})
export class LoveComponent implements OnInit {
 Likes: number = 10;
 @Input() isSelected: boolean = true;
  @Output('change') change = new EventEmitter();
   //isSelected:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onCLick(){
    this.isSelected=!this.isSelected;
    // let someObject = {
    //        color:'red'
    // }
   // this.change.emit(this.isFavourite);
    this.change.emit(this.isSelected);
  }

}
