import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent {
  categories: Array<string> = ['romance', 'thriller', 'horror', 'fiction', 'fantasy'];
  constructor(private router: Router) {}
  searchByCategory(category: string) {
    this.router.navigate(['/the-miracles-bookshop/search', category]);
  }

}
