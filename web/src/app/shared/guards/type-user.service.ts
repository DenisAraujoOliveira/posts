import { Observable } from 'rxjs';
import { AuthService } from '../../login/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TypeUserGuard implements CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canLoad(route: Route): Observable<boolean> | boolean {
    if (this.authService.getUser() == null) {
      this.router.navigate(['/login']);
      return false;
    } else if (this.authService.getUser().access === 1) {
      this.router.navigate(['/home/gp']);
      return  true;
    } else if (this.authService.getUser().access === 2) {
        this.router.navigate(['/home/criacao']);
      return  true;
    } else if (this.authService.getUser().access === 3) {
      this.router.navigate(['/home/atendimento']);
      return  true;
    }
  }
}
