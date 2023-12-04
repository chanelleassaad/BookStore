import { Component } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  books: Array<{ src: String, bookName: String, author: String, price: number, publishedBy: string, publishYear: string, description: string, categories: Array< string>  }> = [
    {src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["novel","horror"]},
    {src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["novel","horror"]},
    {src: '/assets/images/book-cover2.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["novel","horror"]},
    {src: '/assets/images/book-cover2.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["novel","horror"]},
    {src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["novel","horror"]},
    {src: '/assets/images/book-cover2.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["novel","horror"]},
    {src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["novel","horror"]},
  ];


  selectedBook: any = null;

  openDetailsModal(book: any) {
    this.selectedBook = book;
  }

  closeDetailsModal() {
    this.selectedBook = null;
  }

  addToCart() {

  }
}
