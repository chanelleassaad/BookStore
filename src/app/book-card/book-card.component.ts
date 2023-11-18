import { Component } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  books: Array<{ src: String, bookName: String, author: String, price: number }> = [
    {src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23},
    {src: '/assets/images/book-cover2.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23},
    {src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23},
    {src: '/assets/images/book-cover2.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23},
    {src: '/assets/images/book-cover2.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23},
    {src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23},
    {src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23},
  ];

}
