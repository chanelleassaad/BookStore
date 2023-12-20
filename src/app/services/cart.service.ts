import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, Subject, tap} from "rxjs";
import { CartModel } from "../models/cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:3000';

  // Subject to notify subscribers when the cart is updated
  private cartUpdatedSubject = new Subject<void>();

  // Observable to subscribe to cart update events
  cartUpdated$ = this.cartUpdatedSubject.asObservable();

  constructor(private http: HttpClient) {}

  addToCart(body: any) {
    return this.http.post(`${this.apiUrl}/cart`, body).pipe(
      tap(() => {
        // Notify subscribers that the cart has been updated
        this.notifyCartUpdated();
      })
    );
  }

  removeFromCart(basketId: string, bookCopyId: string) {
    return this.http.delete(`${this.apiUrl}/cart/` + basketId + '/' + bookCopyId).pipe(
      tap(() => {
        // Notify subscribers that the cart has been updated
        this.notifyCartUpdated();
      })
    );
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

  // Call this method to notify subscribers that the cart has been updated
  notifyCartUpdated() {
    this.cartUpdatedSubject.next();
  }
}
