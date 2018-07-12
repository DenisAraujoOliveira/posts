import { environment } from '../../../environments/environment';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept( request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request).pipe( catchError(this.errorHandler);
    return next.handle(request).pipe( catchError( (errorResponse: HttpErrorResponse) => {
      const error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse;
      console.log(error);
      if (errorResponse.status === 401 && error.error.error === 'token_expired') {
        const http = this.injector.get(HttpClient);
        return http.post<any>( environment.apiUrl + 'auth/refresh', {}).pipe( mergeMap( data => {
          localStorage.setItem('token', data.token);
          const cloneRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${data.token}`}});
          return next.handle(cloneRequest);
        }));
      }
      return throwError(errorResponse);
    })
    );
  }

}
