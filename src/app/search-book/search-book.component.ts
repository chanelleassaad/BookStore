import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BookSearchService} from "../services/book-search.service";
import {SharedService} from "../services/shared.service";

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  categories: Array<string> = [];
  constructor(private router: Router, private bookSearchService: BookSearchService, private sharedService: SharedService) {}

  ngOnInit() {
    this.bookSearchService.getCategories().subscribe( categories => {
      categories.map( cat => {
        this.categories.push(cat.categoryName);
      })
    })
  }

  searchByCategory(category: string) {
    this.router.navigate(['/the-miracles-bookshop/search', category]);
  }

  search( val: string) {
    this.sharedService.setSearchQuery(val);
  }
}
