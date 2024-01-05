import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component {
   constructor(private login_service:LoginService, private router:Router){}
 
  user:any=sessionStorage.getItem('prenom')+" "+sessionStorage.getItem('nom')
  stat:any=sessionStorage.getItem('role')
  userId:any
  role:any;
  
  ngonInit() {
    this.userId=sessionStorage.getItem('userId');
    console.log(this.userId);

    if(this.stat=="admin")  
    {
      this.role= "administrateur";
      console.log(this.role);
    }
    else if(this.stat=="passager")
    {
      this.role= "passager";
    }
    else
    {
      this.role= "chauffeur";
    }
    console.log(this.role);
  }
 
  logout() {
    this.login_service.logOut();
    return this.router.navigate(['/login']);
  }
}
