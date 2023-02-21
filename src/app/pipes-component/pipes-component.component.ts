import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes-component.component.html',
  styleUrls: ['./pipes-component.component.css']
})
export class PipesComponentComponent implements OnInit {
course = {
  title: 'Angular in dept Training',
  rating: 4.897,
  students: 12345,
  price: 200.45,
  releaseDate: new Date(2022, 1, 1)
}
  constructor() { }

  ngOnInit(): void {
  }

}
