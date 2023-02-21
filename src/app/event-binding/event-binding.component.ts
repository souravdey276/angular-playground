import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // onSave(){
  // console.log('Save Button Clicked');
  // }
  onSave(event:Event){
    event.stopPropagation();
 console.log('Save Button Clicked',event);
  }
  onDivClicked(){
    console.log("Outer Div Clicked");
  }
  onInternalDivClicked(){
    console.log("Internal Div Clicked")
  }
  onKeyUp(){
console.log("Enter button is pressed");
  }
// onKeyUpEvent2(event:KeyboardEvent){
//   if(event.keyCode===13){
//     console.log("Enter  is pressed");
//   }
// }
onKeyUpEvent2(email:string){
 console.log("Email");
}

}
