import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookSearchModel} from "../models/book-search.model";
import {BookDetailsModel} from "../models/book-details.model";
import {CategoriesModel} from "../models/categories.model";

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Array<BookSearchModel>> {
    return this.http.get<Array<BookSearchModel>>(`${this.apiUrl}/bookSearch`);
  }

  getBookDetails(bookCopyId: number): Observable<BookDetailsModel> {
    return this.http.get<BookDetailsModel>(  this.apiUrl + '/bookSearch/' + bookCopyId)
  }

  getCategories(): Observable<Array<CategoriesModel>> {
    return this.http.get<Array<CategoriesModel>>(this.apiUrl + '/categories');
  }

  getBooksByCategory(categoryId: number): Observable<Array<BookSearchModel>> {
    return this.http.get<Array<BookSearchModel>>(this.apiUrl + '/categories/'+ categoryId);
  }

  getBooksBasedOnSearch(search: string): Observable<Array<BookSearchModel>> {
    return this.http.get<Array<BookSearchModel>>(this.apiUrl + '/bookSearch/search/'+ search);
  }

}
