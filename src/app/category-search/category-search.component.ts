import { Component } from '@angular/core';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.component.html',
  styleUrls: ['./category-search.component.css']
})
export class CategorySearchComponent {
  categories: Array<String> = ['Romance Novels', 'Thriller', 'Horror', 'Fiction', 'Fantasy'];

}
