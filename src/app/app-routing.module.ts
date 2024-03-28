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
import { AdminGuard } from './service/admin.guard';

const routes: Routes = [
  { path: '', component: AccueilPrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: 'home', component: HomeComponent,
    canActivate: [AdminGuard],
    children:
      [
        { path: 'accueil', component: AccueilComponent,canActivate: [AdminGuard] },
        { path: 'voiture', component: VoitureComponent ,canActivate: [AdminGuard] },
        { path: 'depart', component: DepartComponent ,canActivate: [AdminGuard]  },
        { path: 'passager', component: PassagerComponent ,canActivate: [AdminGuard]  },
        { path: 'chauffeur', component: ChauffeurComponent  ,canActivate: [AdminGuard] },
        { path: 'createChauffeur', component: AddChauffeurComponent ,canActivate: [AdminGuard]  },
        { path: 'editChauffeur', component: EditChauffeurComponent ,canActivate: [AdminGuard]  },
        { path: 'editPassager', component: EditPassagerComponent  ,canActivate: [AdminGuard] },
        { path: 'editVoiture', component: EditVoitureComponent ,canActivate: [AdminGuard]  },
        { path: 'editBagage', component: EditBagageComponent  ,canActivate: [AdminGuard] },
        { path: 'ajouterVoiture', component: AddVoitureComponent ,canActivate: [AdminGuard]  },
        { path: "ajouterPassager", component: AddPassagerComponent  ,canActivate: [AdminGuard] },
        { path: "ajouterBagage", component: AddBagagesComponent  ,canActivate: [AdminGuard] },
        { path: "ajouterDepart", component: AddDepartComponent  ,canActivate: [AdminGuard] },
        { path: "depart", component: DepartComponent ,canActivate: [AdminGuard]  },
        { path: "addPassager", component: AddPassagerDepartComponent ,canActivate: [AdminGuard]  },
        { path: "passagerDepart", component: PassagerDepartComponent  ,canActivate: [AdminGuard] },
        { path: "pertes", component: PertesComponent  ,canActivate: [AdminGuard] },
        { path: "bagage", component: BagageComponent ,canActivate: [AdminGuard]  },
      ]
  },
  {
    path: 'Home', component: Home1Component,
    children: [
      { path: "Accueil", component: Accueil1Component },
      { path: "bagages", component: MesBagagesComponent },
      { path: "departs", component: MesDepartsComponent },

    ], canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }




