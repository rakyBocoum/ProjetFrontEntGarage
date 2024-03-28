import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard  
{
  
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    const role = sessionStorage.getItem('role');

    if (role === 'admin') {
      // L'utilisateur a le rôle d'admin, autorise l'accès
      return true;
    } else {
      // Redirige vers la page de connexion si l'utilisateur n'a pas le rôle requis
      this.router.navigate(['login']);
      return false;
    }
  }
}
