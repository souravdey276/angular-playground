import { BookService } from './book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  list:string = "List of Books"
  books:string[];

  constructor(service:BookService) { 
    this.books = service.getBooks();
  }

  ngOnInit(): void {
  }

}
