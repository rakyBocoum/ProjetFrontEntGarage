import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { BagagesService } from 'src/app/service/bagages.service';
import { LoginService } from 'src/app/service/login.service';
import { PassagerService } from 'src/app/service/passager.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
//user= LoginComponent.log;
user:any=sessionStorage.getItem('prenom')+" "+sessionStorage.getItem('nom')
stat:any=sessionStorage.getItem('role')
role:any;
pertes:any;
totalPertes: number = 0;


ngOnInit():void {
  this.getPerte();
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
constructor(private login_service:LoginService, private router:Router, private userService : UserService, private bagagesService : BagagesService){}
getPerte(){
  this.bagagesService.getPerte().subscribe({
    next:(response) =>{
      console.log(response);
      //console.log('Response from server:', response);
      //console.log(response.body.message);
        if(response.body.message == "success"){
          this.totalPertes = response.body.taille
          this.pertes = response.body.pertes
          
        }
        console.log(this.totalPertes);
    },error:(err) => {
      console.log(err);}
  })

}
logout() {
  this.login_service.logOut();
  return this.router.navigate(['/login']);
}



}
