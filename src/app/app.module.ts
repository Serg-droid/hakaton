import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './_layers/main-page/main-page.component';
import { MapPageComponent } from './_layers/map-page/map-page.component';
import { ReviewPageComponent } from './_layers/review-page/review-page.component';
import { TotalReviewComponent } from './total-review/total-review.component';
import { GenerateReviewComponent } from './generate-review/generate-review.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';
import { AuthPageComponent } from './_layers/auth-page/auth-page.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import {AuthInterceptor} from './_helpers/auth.interceptor';
import {fakeBackendProvider} from './_helpers/fake-backend';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor
}

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MapPageComponent,
    ReviewPageComponent,
    TotalReviewComponent,
    GenerateReviewComponent,
    AllReviewsComponent,
    AuthPageComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [INTERCEPTOR_PROVIDER, fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
