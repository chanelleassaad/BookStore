import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookSearchModel} from "../models/book-search.model";
import {BookDetailsModel} from "../models/book-details.model";

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {

  private apiUrl = 'http://localhost:3000'; // Change this to your backend URL

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Array<BookSearchModel>> {
    return this.http.get<Array<BookSearchModel>>(`${this.apiUrl}/bookCopy`);
  }

  getBookDetails(bookCopyId: number): Observable<BookDetailsModel> {
    return this.http.get<BookDetailsModel>(  this.apiUrl + '/bookCopy/' + bookCopyId)
  }

}