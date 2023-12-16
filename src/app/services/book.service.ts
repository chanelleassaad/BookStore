  import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() { }

  private orderedBooks: any[] = [
    { id: 1, title: 'Book 1', author: 'Author 1', rating: 0, feedback: '' },
    { id: 2, title: 'Book 2', author: 'Author 2', rating: 0, feedback: '' },
    // Add more books as needed
  ];

  getOrderedBooks(): any[] {
    return this.orderedBooks;
  }
}
