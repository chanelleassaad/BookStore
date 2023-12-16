import { Component, OnInit } from '@angular/core';
import {BookService} from "../services/book.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  orderedBooks: any[] = [];
  isLoggedIn: boolean = false; // Add a flag to track user login status

  constructor(private bookService: BookService, private authService: AuthService) { }

  ngOnInit(): void {
    this.orderedBooks = this.bookService.getOrderedBooks();
    this.isLoggedIn = this.authService.isUserLoggedIn(); // Check user login status
  }

  setRating(book: any, rating: number) {
    book.rating = rating;
  }

  isSubmitDisabled(book: any): boolean {
    // Disable submit button if the user is not logged in or if rating is not filled
    return   !book.rating;
  }

  submitFeedback(bookId: number, rating: number, feedback: string) {
    console.log(`Book ID: ${bookId}, Rating: ${rating}, Feedback: ${feedback}`);
    // Implement logic to submit feedback only if the user is logged in and rating is filled
    if (this.isLoggedIn && rating) {
      // Submit feedback logic here
    }
  }
}
