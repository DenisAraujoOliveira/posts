import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = environment.apiUrl.split('/');
    const token = localStorage.getItem('token');

    if (token && (requestUrl[2] === apiUrl[2])) {
      const newRequest = request.clone({setHeaders: {'Authorization': `Bearer ${token}`}});
      return next.handle(newRequest);
    }
    return next.handle(request);


  }
}
