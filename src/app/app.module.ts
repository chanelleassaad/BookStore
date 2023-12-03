import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import {AppRoutingModule} from "./app-routing.module";
import { BookCardComponent } from './components/book-card/book-card.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {ToastrModule} from "ngx-toastr";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AlertModule} from "ngx-bootstrap/alert";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategorySearchComponent,
    BookCardComponent,
    UserLoginComponent,
    ContactUsComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
