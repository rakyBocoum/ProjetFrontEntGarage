import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http : HttpClient) { }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  loginUserService( email : string , password : string){
    return this.http.post<any>('http://localhost:3000/api/user/login',{email,password},{observe: "response"})
    .pipe(
      map((userData) => {
        const token = userData.body.user.token as string;
        const tokenInfo = this.getDecodedAccessToken(token); // decode token

        sessionStorage.setItem('token', token);
        sessionStorage.setItem('email', userData.body.user.email);
        sessionStorage.setItem('prenom', userData.body.user.prenom);
        sessionStorage.setItem('telephone', userData.body.user.telephone);
        sessionStorage.setItem('nom', userData.body.user.nom);
        sessionStorage.setItem('userId', userData.body.user.id)
        sessionStorage.setItem('role', userData.body.user.role);
        return userData;
      })
    );
    
  }
  

  loggedIn(){
   return sessionStorage.getItem('token');
    
  }
  logOut() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('nom');
    sessionStorage.removeItem('prenom');
    sessionStorage.removeItem('role');
    sessionStorage.removeItem('telephone');

    sessionStorage.removeItem('key');
    sessionStorage.removeItem('userId');
  }
}



