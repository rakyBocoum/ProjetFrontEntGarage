import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {

  constructor(private http : HttpClient) { }


    getAllPassager(){
      return this.http.get<any>('http://localhost:3000/api/passager/all',{observe:"response"});
    }
    addBagage(id:number,libelle:string,quantite:string,dateHeure:string) {
      // var formData: any = new FormData();
      // formData.append("libelle", libelle);
     
      // formData.append("quantite", quantite);
      return this.http.post<any>('http://localhost:3000/api/passager/createBagage/'+id+"/"+dateHeure ,{id,libelle,quantite},{observe:'response'});
    }
    getBagPassager(id:number){
      return this.http.get<any>('http://localhost:3000/api/passager/passagerBagage/'+id,{observe:'response'});
    }
    updateBagage(id:number,libelle:string,quantite :string) {
      return this.http.put<any>('http://localhost:3000/api/passager/update/'+id ,{libelle,quantite},{observe:'response'});
    }
    updatePassager(id:number,prenom:string,nom:string,adresse:string,telephone:string,Cni:string) {
      return this.http.put<any>('http://localhost:3000/api/user/update/'+id ,{prenom,nom,adresse,telephone,Cni,},{observe:'response'});
    }
    deleteBagage(id : number){
      return this.http.delete<any>('http://localhost:3000/api/passager/delete/'+id,{observe:'response'});
    }
    deletePassager(id : number){
      return this.http.delete<any>('http://localhost:3000/api/passager/deletePassager/'+id,{observe:'response'});
    }
    getPassagerById(id:any){
      return this.http.get<any>('http://localhost:3000/api/passager/'+id,{observe:'response'});
    }
    getIdPassager(id:any){
      return this.http.get<any>('http://localhost:3000/api/passager/idPassager/'+id,{observe:'response'});
    }
    getIdPassagerDepart(id:any){
      return this.http.get<any>('http://localhost:3000/api/passager/idPassagerDepart/'+id,{observe:'response'});
    }
    addPerte(id:any){
      return this.http.put<any>('http://localhost:3000/api/passager/addperte/'+id,{observe:'response'});
    }
    
    
}
