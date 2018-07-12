import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../auth';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { User } from '../../user/user';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router ) { }

  userAuth(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  login(credentials: { email: string, password: string}): Observable<Auth> {
    return this.http.post<Auth>(environment.apiUrl + 'auth/login', credentials).pipe(
      tap(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', btoa(JSON.stringify(data.user)));
       }
      )
    );
  }
  logout(): void {
    this.http.get(environment.apiUrl + 'auth/logout' ).subscribe( resp => {
      console.log(resp);
      localStorage.clear();
      this.router.navigate(['login']);
    });
  }

  getUser(): User {
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }

  setUser(): Promise<boolean> {
    return this.http.get<Auth>(environment.apiUrl + 'auth/user' ).toPromise().then(data => {
      if (data.user) {
        localStorage.setItem('user', btoa(JSON.stringify(data.user)));
        return true;
      }
      return false;
    });
  }
}
