import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard  
{

    constructor(private login_service:LoginService,private router:Router){}

    canActivate():boolean
    {
      if(this.login_service.loggedIn())
        {
          return true
        }
        else
        {
           this.router.navigate(['login'])
           return false
        }
    }
}
