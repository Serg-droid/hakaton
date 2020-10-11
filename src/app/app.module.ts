import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './layers/main-page/main-page.component';
import { MapPageComponent } from './layers/map-page/map-page.component';
import { ReviewPageComponent } from './layers/review-page/review-page.component';
import { TotalReviewComponent } from './total-review/total-review.component';
import { GenerateReviewComponent } from './generate-review/generate-review.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { AuthPageComponent } from './layers/auth-page/auth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapPageComponent,
    ReviewPageComponent,
    TotalReviewComponent,
    GenerateReviewComponent,
    AllReviewsComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
