// import { inject } from '@angular/core';
// import { CanActivateFn } from '@angular/router';
// import { AuthService } from './service/auth.service';

// export const authGuard: CanActivateFn = (route, state)  => {
//   const authService = inject(AuthService);
  
//   return authService.IsAuthenticated();
// };

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isAuthenticated = this.authService.IsAuthenticated();

    if (isAuthenticated) {
      return true;
    } else {
      return this.router.createUrlTree(['/login']);
    }
  }
}
