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
      this.router.navigate(['main', 'login-admin']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let tokenValidate;
    const token = localStorage.getItem('token-admin');


    this.authService.adminValidate(token)
      .toPromise()
      .then((res: any) => {
        console.log(res);
        tokenValidate = res.data.rol === 'Admin' ? true : false;
      })
      .catch(error => {
        tokenValidate = false;
      });

    //this.redirect(tokenValidate);

    console.log(tokenValidate);

    return tokenValidate;
  }
}
