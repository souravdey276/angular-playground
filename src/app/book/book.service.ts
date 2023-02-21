import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  getBooks(){
    return[
      'Head First Java',
      'Complete reference SQL',
      'Clean Code',
      'Head First Angular'
    ];
  }

  constructor() { }
}
