import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookSearchModel} from "../models/book-search.model";
import {CartModel} from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  addToCart(body: any)  {
    return this.http.post(`${this.apiUrl}/cart/`, body);
  }
  getCart(userId: number): Observable<CartModel> {
    return this.http.get<CartModel>(`${this.apiUrl}/cart/user/` + userId);
  }

  updateProfile(profileData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/user/profile/`, profileData);
  }

  buyBasket(basketId: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/cart/buy/${basketId}`, {});
  }
}
