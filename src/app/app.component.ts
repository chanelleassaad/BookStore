import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BookStore';
  @ViewChild('shoppingCart') shoppingCart!: ElementRef;

  toggleCart() {
    const cart = this.shoppingCart.nativeElement;
    cart.style.transform = cart.style.transform === 'translateX(0%)' ? 'translateX(100%)' : 'translateX(0%)';
  }
  closeCart() {
    const cart = this.shoppingCart.nativeElement;
    cart.style.transform = 'translateX(100%)';
  }

}
