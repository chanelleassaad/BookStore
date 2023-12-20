import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import {UserInfoModel} from "../../models/user-info.model";

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {
  cartItems: Array<any> = [];
  totalPrice: number = 0;
  totalQuantity: number = 0;
  basketId: number = 0;
  checkOutVal: boolean = false;
  // @ts-ignore
  userInfo: UserInfoModel | null;

  constructor(private cartService: CartService, private authService: AuthService) {}

  ngOnInit() {
    this.checkAndFillCart();
    this.authService.loginStatusChanged.subscribe(() => {
      // React to login status changes, e.g., user logs in or logs out
      this.checkAndFillCart();
    });
  }

  private checkAndFillCart() {
    if (this.authService.isUserLoggedIn()) {
      const userId = this.authService.getUserData()?.userId;
      if (userId) {
        this.cartService.getCart(userId).subscribe((cart) => {
          this.cartItems = cart.books; // Assuming the response structure has a 'books' property
          this.totalPrice = cart.totalPrice
          this.totalQuantity = cart.totalQuantity
          this.basketId = cart.basketId
        });
      }
    } else {
      this.cartItems = []; // Clear the cart if the user is not logged in
    }
  }

  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }

  checkOut() {
    this.checkOutVal = true;
    this.userInfo = this.authService.getUserData();
  }

  onCheckout(checkoutForm: any) {
    const profileData = {
      phoneNumber: checkoutForm.form.controls['phoneNumber'].value,
      building: checkoutForm.form.controls['building'].value,
      street: checkoutForm.form.controls['street'].value,
      city: checkoutForm.form.controls['city'].value
    };
    this.cartService.updateProfile(profileData).subscribe();
    this.cartService.buyBasket(this.basketId + '').subscribe(x => {
      console.log(x);
    })

  }

}
