import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BookSearchService} from "../../services/book-search.service";
import {BookSearchModel} from "../../models/book-search.model";
import {BookDetailsModel} from "../../models/book-details.model";
declare var bootstrap: any;
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit{

  @Input() typeShow: string = '';

  booksToDisplay: Array<BookSearchModel> = [];
  selectedBook: BookDetailsModel | null = null;
  addedBook: any = '';

  constructor(private route: ActivatedRoute, private bookSearchService: BookSearchService) {
  }
  ngOnInit() {
    switch (this.typeShow) {
      case 'search':
        this.loadSearchAll()
        break;
      case 'category':
        this.viewCategory()
        break;
    }
  }

  loadSearchAll() {
    this.bookSearchService.getAllBooks().subscribe( books => {
      this.booksToDisplay = books;
    })
  }

  viewCategory() {
    this.route.paramMap.subscribe(params => {
      const category = params.get('category');
      if (category != null) {
        // this.booksToDisplay = this.books.filter(book => book.categories.includes(category));
      }
    });
  }

  openDetailsModal(bookId: number) {
    this.bookSearchService.getBookDetails(bookId).subscribe( book => {
      console.log(this.selectedBook);
      this.selectedBook = book;
    })
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
