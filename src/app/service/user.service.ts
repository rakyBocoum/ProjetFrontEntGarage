import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  creerUserPassager(prenom: string, nom: string, adresse: string, telephone: string, email: string, password: string, Cni: string) {

    return this.http.post<any>('http://localhost:3000/api/user/register', { prenom, nom, adresse, email, telephone, password,Cni },{observe:'response'});
  }

  creerUserChauffeur(prenom: string, nom: string, adresse: string, telephone: string, email: string, password: string, numPermis: number) {
    
    return this.http.post<any>('http://localhost:3000/api/user/createChauffeur',  { prenom, nom, adresse, email, telephone, password,numPermis },{observe:'response'});
  }
  getAllUsers() {
    return this.http.get<any>('http://localhost:3000/api/user/all');
  }
  updateUser(id: number, prenom: string, nom: string, adresse: string, telephone: string, password: string, role: string) {
    
    return this.http.put<any>('http://localhost:3000/api/user/update/' + id, {id,prenom,nom,password,telephone,adresse},{observe:"response"});
  }
  deleteUser(id: number) {
    return this.http.delete<any>('http://localhost:3000/api/user/delete/' + id,{observe:"response"});
  }
  perte(){
    return this.http.get<any>('http://localhost:3000/api/passager/perte/' ,{observe:"response"});
  }

}
