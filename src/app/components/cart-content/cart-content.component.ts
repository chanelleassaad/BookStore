import {Component} from '@angular/core';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent {

  cartItems: Array<any> = [];

  isCartEmpty(): boolean {
    return this.cartItems.length === 0;
  }
}
