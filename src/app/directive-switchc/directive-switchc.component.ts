import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-switchc',
  templateUrl: './directive-switchc.component.html',
  styleUrls: ['./directive-switchc.component.css']
})
export class DirectiveSwitchcComponent implements OnInit {
viewMode: string ='map';
  constructor() { }

  ngOnInit(): void {
  }
makeMapActive(){
  this.viewMode='map';
}
makeListActive(){
  this.viewMode='list';
}
}
