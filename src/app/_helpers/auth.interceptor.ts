import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../_shared/auth.service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private auth:AuthService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.auth.isAuthenticated()) {
      req = req.clone({
        setHeaders: {
          Authenticated: this.auth.token
        }
      })
    }

    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('Intercepted Error: ', error)
          if(error.status === 401) {
            this.auth.logout()
            this.router.navigate(['/auth']), {
              queryParams: {
                authFailed: true
              }
            }
          }
          return throwError(error)
        })
      )
  }
}

