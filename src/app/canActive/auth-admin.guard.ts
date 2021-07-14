import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  redirect(flag: boolean): any {
    if (!flag) {
      this.router.navigate(['/', 'main']);
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const tokenValidate = false;
    const token = localStorage.getItem('token');

    this.redirect(tokenValidate);

    this.authService.adminValidate(token)
      .toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

    return tokenValidate;
  }
}
