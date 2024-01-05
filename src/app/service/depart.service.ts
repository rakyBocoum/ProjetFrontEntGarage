import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartService {

  constructor( private http : HttpClient) { }

  addDepart(id :number ,dateHeure:string,destination :string) {
    
    return this.http.post<any>('http://localhost:3000/api/depart/create/'+id,{dateHeure,destination} ,{observe:'response'});
  }
  getAllDepart(){
    return this.http.get<any>('http://localhost:3000/api/depart/all',{observe:'response'});
  }
  getAllDepartVoiture(id : number){
    return this.http.get<any>('http://localhost:3000/api/depart/allDepartVoiture/'+id,{observe:'response'});
  }
  updateHeureHeureDepart(id :number ,dateHeure:string,destination :string) {
    
    return this.http.put<any>('http://localhost:3000/api/depart/updateHeureHeure/'+id,{dateHeure,destination},{observe:'response'} );
  }
  deleteDepart(id : number,dateHeure:string){
    return this.http.delete<any>('http://localhost:3000/api/depart/delete/'+id+'/'+dateHeure,{observe:'response'});
  }
  addPassagerInDepart(id :number ,dateHeure:string,destination :string,Cni:string) {
    
    return this.http.put<any>('http://localhost:3000/api/depart/addPassager/'+id+'/'+dateHeure+'/'+destination,{Cni} ,{observe:'response'});
  }
  getPassager(id :number ,dateHeure:string,destination :string){
    return this.http.get<any>('http://localhost:3000/api/depart/allPassager/'+id+'/'+dateHeure+'/'+ destination,{observe:'response'});
  }
  deletePassager(id:number,dateHeure:string,destination:string,passager_id:number){
    return this.http.delete<any>('http://localhost:3000/api/depart/deletePassager/'+id+'/'+dateHeure+'/'+passager_id+'/'+destination  ,{observe:'response'});
  }
  getDepartById(id: any,dateHeure:string){
    return this.http.get<any>('http://localhost:3000/api/depart/departById/' + id + '/' + dateHeure ,{observe:'response'})
  }
}
