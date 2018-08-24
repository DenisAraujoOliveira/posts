import { Observable } from 'rxjs';
import { AuthService } from '../../login/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad , Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private verificarAcesso() {
    if (this.authService.userAuth()) {
      return true;
    }
    this.router.navigate(['login']);

    return false;
  }
  canActivate(
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.verificarAcesso();
  }



  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean  {
    return this.verificarAcesso();
  }

}
