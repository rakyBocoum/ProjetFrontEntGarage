import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthGuard } from './service/auth.guard';
import { AccueilComponent } from './main/accueil/accueil.component';
//import { HomeComponent } from './main/home/home.component';
//import { HomeComponent } from './main/home/home.component';
//import { HomeComponent } from './main/home/home.component';
import { HomeComponent } from './main/home/home.component';
import { VoitureComponent } from './main/voiture/voiture.component';
import { PassagerComponent } from './main/passager/passager.component';
import { ChauffeurComponent } from './main/chauffeur/chauffeur.component';
import { EditChauffeurComponent } from './main/edit-chauffeur/edit-chauffeur.component';
import { EditPassagerComponent } from './main/edit-passager/edit-passager.component';
import { EditVoitureComponent } from './main/edit-voiture/edit-voiture.component';
import { AddChauffeurComponent } from './main/add-chauffeur/add-chauffeur.component';
import { AddVoitureComponent } from './main/add-voiture/add-voiture.component';
import { AddPassagerComponent } from './main/add-passager/add-passager.component';
import { AddBagagesComponent } from './main/add-bagages/add-bagages.component';
import { AddDepartComponent } from './main/add-depart/add-depart.component';
import { BagageComponent } from './main/bagage/bagage.component';
import { EditBagageComponent } from './main/edit-bagage/edit-bagage.component';
import { DepartComponent } from './main/depart/depart.component';
import { AddPassagerDepartComponent } from './main/add-passager-depart/add-passager-depart.component';
import { PassagerDepartComponent } from './main/passager-depart/passager-depart.component';
import { Home1Component } from './main/home1/home1.component';
import { Accueil1Component } from './main/accueil1/accueil1.component';
import { MesBagagesComponent } from './main/mes-bagages/mes-bagages.component';
import { MesDepartsComponent } from './main/mes-departs/mes-departs.component';
import { AccueilPrincipalComponent } from './accueil-principal/accueil-principal.component';
import { PertesComponent } from './main/pertes/pertes.component';

const routes: Routes = [
  {path:'',component:AccueilPrincipalComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent,
  children:[
    {path:'accueil',component:AccueilComponent},
    {path:'voiture',component:VoitureComponent},
    {path:'depart',component:DepartComponent},
    {path:'passager',component:PassagerComponent},
    {path:'chauffeur',component:ChauffeurComponent},
    {path:'createChauffeur',component:AddChauffeurComponent},
    {path:'editChauffeur',component:EditChauffeurComponent}, 
    {path:'editPassager',component:EditPassagerComponent},
    {path:'editVoiture',component:EditVoitureComponent},
    {path:'editBagage',component:EditBagageComponent},
    {path:'ajouterVoiture',component:AddVoitureComponent},
    {path:"ajouterPassager",component:AddPassagerComponent},
    {path:"ajouterBagage",component:AddBagagesComponent},
    {path:"ajouterDepart",component:AddDepartComponent},
    {path:"depart",component:DepartComponent},
    {path:"addPassager",component:AddPassagerDepartComponent},
    {path:"passagerDepart",component:PassagerDepartComponent},
    {path:"pertes",component:PertesComponent},
   // {path:"ajouterDepart",component:AddDepartBag}
    {path:"bagage",component:BagageComponent},
  ],canActivate:[AuthGuard]},
  {path:'Home',component:Home1Component,
  children:[
    {path:"Accueil",component:Accueil1Component},
    {path:"bagages",component:MesBagagesComponent},
    {path:"departs",component:MesDepartsComponent},

  ],canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }




