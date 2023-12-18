import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
declare var bootstrap: any;
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit{

  @Input() typeShow: string = '';

  books: Array<{ bookId: number, src: String, bookName: String, author: String, price: number, publishedBy: string, publishYear: string, description: string, categories: Array<string> }> = [
    {bookId:1 , src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["romance","horror"]},
    {bookId:2 ,src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["romance","horror"]},
    {bookId:3 ,src: '/assets/images/book-cover2.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["romance","horror"]},
    {bookId:4 ,src: '/assets/images/book-cover2.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["romance","horror"]},
    {bookId:5 ,src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["romance","horror"]},
    {bookId:6 ,src: '/assets/images/book-cover2.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["romance","horror"]},
    {bookId:7 ,src: '/assets/images/book-cover.jpg', author: 'Colleen Hoover', bookName: 'It Ends With Us', price: 23, publishedBy: 'X Y', publishYear: '2019', description: 'hx wwucb jwcgv wecjwuegbcv wejchb wcjwbec w cjuowec w ejcjwe', categories: ["romance","horror"]},
  ];

  booksToDisplay: any = null
  selectedBook: any = null;
  addedBook: any = '';

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    switch (this.typeShow) {
      case 'search':
        this.booksToDisplay = this.books;
        break;
      case 'category':
        this.viewCategory()
        break;
    }
  }

  viewCategory() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category != null) {
        this.booksToDisplay = this.books.filter(book => book.categories.includes(category));
      }
    });
  }

  openDetailsModal(book: any) {
    this.selectedBook = book;
  }
  closeDetailsModal() {
    this.selectedBook = null;
  }
  addToCart(book: any) {
    this.addedBook = book.bookName;
    const toast = new bootstrap.Toast(document.getElementById('liveToast'));
    toast.show();
  }
}
