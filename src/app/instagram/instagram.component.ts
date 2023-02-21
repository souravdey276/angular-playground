import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent  {
  instagram = {
    likes: 10,
    isActive: false
  }
 constructor() { }
  ngOnInit(): void {
  }
 onLoveStatusChange(status: boolean) {
    console.log("Tweet like status changed : ", status);
    this.instagram.isActive = status;
    this.instagram.likes += (this.instagram.isActive) ? 1 : -1;
    console.log(this.instagram.isActive, " Likes : ", this.instagram.likes);
  }
}
