import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search-by-category',
  templateUrl: './search-by-category.component.html',
  styleUrls: ['./search-by-category.component.css']
})
export class SearchByCategoryComponent {

  category: string | undefined;

  constructor(private route: ActivatedRoute) {
    this.category = this.route.snapshot.paramMap.get('category')?.toUpperCase();
  }

}
