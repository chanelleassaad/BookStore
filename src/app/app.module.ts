import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchBookComponent } from './search-book/search-book.component';
import {AppRoutingModule} from "./app-routing.module";
import { BookCardComponent } from './components/book-card/book-card.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {ToastrModule} from "ngx-toastr";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AlertModule} from "ngx-bootstrap/alert";
import {CommonModule} from "@angular/common";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { SearchByCategoryComponent } from './search-by-category/search-by-category.component';
import { CartContentComponent } from './components/cart-content/cart-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearchBookComponent,
    BookCardComponent,
    UserLoginComponent,
    ContactUsComponent,
    SearchByCategoryComponent,
    CartContentComponent,
  ],
    imports: [
        AppRoutingModule,
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        AlertModule,
        MatTabsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
