import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {SearchBookComponent} from "./search-book/search-book.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {SearchByCategoryComponent} from "./search-by-category/search-by-category.component";

const routes: Routes = [
  { path: '', redirectTo: '/the-miracles-bookshop', pathMatch: 'full' },
  { path: 'the-miracles-bookshop',
    children: [
      { path: '', component: MainPageComponent },
      { path: 'search', component: SearchBookComponent },
      { path: 'search/:category', component: SearchByCategoryComponent },
      { path: 'contact-us', component: ContactUsComponent  }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
