import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './_layers/main-page/main-page.component';
import {ReviewPageComponent} from './_layers/review-page/review-page.component';
import {MapPageComponent} from './_layers/map-page/map-page.component';
import {TotalReviewComponent} from './total-review/total-review.component';
import {GenerateReviewComponent} from './generate-review/generate-review.component';
import {AllReviewsComponent} from './all-reviews/all-reviews.component';
import {AuthGuard} from './_helpers/auth.guard';
import {AuthFormComponent} from './auth-form/auth-form.component';
import {MainLinksComponent} from './main-links/main-links.component';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '', component: MainPageComponent, children: [
      {path: 'auth', component: AuthFormComponent},
      {path: 'main', component: MainLinksComponent, canActivate: [AuthGuard]}
  ]},
  {path: 'map', component: MapPageComponent, canActivate: [AuthGuard]},
  {path: 'review', component: ReviewPageComponent, canActivate: [AuthGuard], children: [
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
