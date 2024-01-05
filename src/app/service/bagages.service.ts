import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BagagesService {

  constructor(private http : HttpClient) { }
  getPerte(){
    return this.http.get<any>('http://localhost:3000/api/bagages/perdu',{observe:'response'});
  }
  retrouver(id:any){
    console.log('ID reçu dans le service :', id);
    return this.http.put<any>('http://localhost:3000/api/bagages/retrieve/'+id,{observe:'response'});
  }
  sendEmail(id:any){
    return this.http.post<any>('http://localhost:3000/api/bagages/sendmail/'+id,{observe:'response'});
  }
 
}
