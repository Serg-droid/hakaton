import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './layers/main-page/main-page.component';
import {ReviewPageComponent} from './layers/review-page/review-page.component';
import {MapPageComponent} from './layers/map-page/map-page.component';
import {TotalReviewComponent} from './total-review/total-review.component';
import {GenerateReviewComponent} from './generate-review/generate-review.component';
import {AllReviewsComponent} from './all-reviews/all-reviews.component';
import {AuthPageComponent} from './layers/auth-page/auth-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'auth', component: AuthPageComponent},
  {path: 'main', component: MainPageComponent},
  {path: 'map', component: MapPageComponent},
  {path: 'review', component: ReviewPageComponent, children: [
      {path: '', redirectTo: 'generate', pathMatch: 'full'},
      {path: 'total', component: TotalReviewComponent},
      {path: 'generate', component: GenerateReviewComponent},
      {path: 'all-reviews', component: AllReviewsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
