import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ServerAuthResponse, User} from './interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public error$: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) {}

  get token() {
    const expDate = new Date(localStorage.getItem('token-exp'))
    if(new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('token')
  }

  register(user: User): Observable<ServerAuthResponse> {
    return this.http.post<ServerAuthResponse>(`${environment.apiUrl}/api/auth/register`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  login(user: User): Observable<ServerAuthResponse> {
    return this.http.post<ServerAuthResponse>(`${environment.apiUrl}/api/auth/login`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error) {
      const message = error.error.message

      switch(message) {
        case 'LOGIN_NOT_FOUND':
          this.error$.next('Пользователь с таким логином не найден')
        case 'PASSWORD_INVALID':
          this.error$.next('Неверный пароль')
      }
    }

    return throwError(error)
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private setToken(response: ServerAuthResponse | null) {
    if(response && response.token && response.expiresIn) {
      const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('token', response.token)
      localStorage.setItem('token-exp', String(expDate))
    } else {
      localStorage.clear()
    }
  }


}
