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

    const tokenAdmin: boolean = localStorage.getItem('token-admin') != null ? true : false;

    if (tokenAdmin) {
      this.authService.adminValidate(localStorage.getItem('token-admin'))
        .toPromise()
        .then((res: any) => {
          tokenValidate = res.data.rol === 'Admin' ? true : false;
          this.redirect(tokenValidate);
        })
        .catch(error => {
          tokenValidate = false;
          this.redirect(tokenValidate);
        });

    } else {
      console.log(`No existe el token admin`);
    }

    this.redirect(tokenAdmin);

    return tokenAdmin;
  }
}
