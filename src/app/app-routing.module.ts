import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {CategorySearchComponent} from "./category-search/category-search.component";

const routes: Routes = [
  { path: '', redirectTo: '/the-miracles-bookshop', pathMatch: 'full' },
  { path: 'the-miracles-bookshop',
    children: [
      { path: '', component: MainPageComponent },
      { path: 'search', component: CategorySearchComponent },
      // { path: 'review', component:  }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
