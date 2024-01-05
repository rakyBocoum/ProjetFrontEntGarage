import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
//import { HomeComponent } from './main/home/home.component';
//import { HomeComponent } from './main/home/home.component';
//import { HomeComponent } from './main/home/home.component';
import { HomeComponent } from './main/home/home.component';
import { FooterComponent } from './static/footer/footer.component';
import { HeaderComponent } from './static/header/header.component';
import { SidebarComponent } from './static/sidebar/sidebar.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { EditChauffeurComponent } from './main/edit-chauffeur/edit-chauffeur.component';
import { EditPassagerComponent } from './main/edit-passager/edit-passager.component';
import { EditVoitureComponent } from './main/edit-voiture/edit-voiture.component';
import { PassagerComponent } from './main/passager/passager.component';
import { VoitureComponent } from './main/voiture/voiture.component';
import { ChauffeurComponent } from './main/chauffeur/chauffeur.component';
import { AddChauffeurComponent } from './main/add-chauffeur/add-chauffeur.component';
import { AddVoitureComponent } from './main/add-voiture/add-voiture.component';
import { AddPassagerComponent } from './main/add-passager/add-passager.component';
import { AddBagagesComponent } from './main/add-bagages/add-bagages.component';
import { AddDepartComponent } from './main/add-depart/add-depart.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
//import { BabageComponent } from './main/babage/babage.component';
import { BagageComponent } from './main/bagage/bagage.component';
import { EditBagageComponent } from './main/edit-bagage/edit-bagage.component';
import { DepartComponent } from './main/depart/depart.component';
import { AddPassagerDepartComponent } from './main/add-passager-depart/add-passager-depart.component';
import { PassagerDepartComponent } from './main/passager-depart/passager-depart.component';
import { Accueil1Component } from './main/accueil1/accueil1.component';
import { Header1Component } from './static/header1/header1.component';
import { Sidebar1Component } from './static/sidebar1/sidebar1.component';
import { Home1Component } from './main/home1/home1.component';
import { MesBagagesComponent } from './main/mes-bagages/mes-bagages.component';
import { MesDepartsComponent } from './main/mes-departs/mes-departs.component';
import { AccueilPrincipalComponent } from './accueil-principal/accueil-principal.component';
import { PertesComponent } from './main/pertes/pertes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    AccueilComponent,
    EditChauffeurComponent,
    EditPassagerComponent,
    EditVoitureComponent,
    PassagerComponent,
    VoitureComponent,
    ChauffeurComponent,
    AddChauffeurComponent,
    AddVoitureComponent,
    AddPassagerComponent,
    AddBagagesComponent,
    AddDepartComponent,
   
    BagageComponent,
        EditBagageComponent,
        DepartComponent,
        AddPassagerDepartComponent,
        PassagerDepartComponent,
        Accueil1Component,
        Header1Component,
        Sidebar1Component,
        Home1Component,
        MesBagagesComponent,
        MesDepartsComponent,
        AccueilPrincipalComponent,
        PertesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    BsDatepickerModule.forRoot(),
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
