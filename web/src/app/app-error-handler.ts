import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './login/services/auth.service';

@Injectable()
export class AppErrorHandler extends ErrorHandler {

  constructor(private injector: Injector, private as: AuthService) { super(); }

  handleError(errorResponse: HttpErrorResponse | any ) {
    if (errorResponse instanceof HttpErrorResponse) {
      const error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse;
      // console.log(error.error[0] === 'token_expired');
      // console.log(error.error);
      // console.log(error.error.error);
      if (errorResponse.status === 400 && ( error.error.error === 'token_expired' ||
        error.error.error === 'token_invalid' ||
        error.error.error === 'token_not_provided' ||
        error.error.error === 'A token is required' ||
        error.error.error === 'token_expired' || error.error[0] === 'token_expired' )) {
          this.goToLogin();
        }
        if ( errorResponse.status === 401 && ( error.error.error === 'token_has_been_blacklisted' ) ) {
          this.goToLogin();
        }
      }
      super.handleError(errorResponse);
  }

  goToLogin(): void {
    console.log('deu erro tem q apagar');
    // this.as.logout();
    localStorage.clear();
    const router = this.injector.get(Router);
    const ngZone = this.injector.get(NgZone);
    ngZone.run(() => {
      router.navigate(['/login'], { skipLocationChange: true });
    });
  }

}
