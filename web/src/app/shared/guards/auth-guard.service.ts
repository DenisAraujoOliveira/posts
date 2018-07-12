import { Observable } from 'rxjs';
import { AuthService } from '../../login/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.authService.userAuth()) {
      return true;
    }
    this.router.navigate(['login']);

    return false;
  }
}
