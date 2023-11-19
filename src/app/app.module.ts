import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import {AppRoutingModule} from "./app-routing.module";
import { BookCardComponent } from './components/book-card/book-card.component';
import { UserLoginComponent } from './components/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategorySearchComponent,
    BookCardComponent,
    UserLoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
