import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';  // Import the map operator
import { UserInfoModel } from '../models/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private userDataSubject = new BehaviorSubject<UserInfoModel | null>(null);
  userData$ = this.userDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<UserInfoModel> {
    return this.http.post<UserInfoModel>(`${this.apiUrl}/user/login`, { username, password })
      .pipe(
        map(response => {
          // Update user data and login state upon successful login
          this.userDataSubject.next(response);
          this.isLoggedInSubject.next(true);
          return response;
        })
      );
  }

  signup(body: any): Observable<UserInfoModel> {
    return this.http.post<UserInfoModel>(`${this.apiUrl}/user/signup`, body)
      .pipe(
        map(response => {
          // Update user data and login state upon successful signup
          this.userDataSubject.next(response);
          this.isLoggedInSubject.next(true);
          return response;
        })
      );
  }

  logout(): void {
    this.userDataSubject.next(null);
    this.isLoggedInSubject.next(false);
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }

  getUserData(): UserInfoModel | null {
    return this.userDataSubject.value;
  }
}
