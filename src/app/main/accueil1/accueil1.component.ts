import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil1',
  templateUrl: './accueil1.component.html',
  styleUrls: ['./accueil1.component.css']
})
export class Accueil1Component {
  userNom:any=sessionStorage.getItem('nom') 
  userPrenom:any=sessionStorage.getItem('prenom');
  userAdressse:any=sessionStorage.getItem('adresse')
  userEmail:any=sessionStorage.getItem('email')
  userTelephone:any=sessionStorage.getItem('telephone')
  userRole:any=sessionStorage.getItem('role');
  

}
