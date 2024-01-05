import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-chauffeur',
  templateUrl: './add-chauffeur.component.html',
  styleUrls: ['./add-chauffeur.component.css']
})
export class AddChauffeurComponent {
  user: any = []
  passConf!: string

  passError = false;
  passConfError = false;
  emailError = false;


  constructor(private user_service: UserService, private router: Router) { }


  emailVerif(email: string) {

    if ((email.endsWith("@gmail.com")) || (email.endsWith("@yahoo.com")) || (email.endsWith("@hotmail.com")) || (email.endsWith("@hotmail.fr")) || (email.endsWith("@yahoo.fr"))) {
      this.emailError = false
    }
    else {
      this.emailError = true
    }

  }

  passwordLengthVerif(pass1: string) {
    if (pass1.length < 6) {
      this.passError = true

    }

    else if (pass1.length >= 6) {
      setTimeout(
        () => {
          this.passError = false

        }, 500
      )
    }

    if (this.passConf != undefined) {

      if (this.passConf != pass1) {

        this.passConfError = true
      }
      else {
        this.passConfError = false
      }

    }
  }

  passwordConfirmVerif(pass1: string, pass2: string) {
    if (pass1 != pass2) {
      this.passConfError = true
    } else {
      this.passConfError = false
    }

  }


  registerUser() {

    this.user_service.creerUserChauffeur(
      this.user.prenom,
      this.user.nom,
      this.user.adresse,
      this.user.telephone,
      this.user.email,
      this.user.password,
      this.user.numPermis,
    )

      .subscribe({
        next: (data) => {
          if (data.body['message'] == "already") {

            this.showAlertMessage('Erreur', 'Un compte avec ' + this.user.email + ' exite déjà', 'warning')

          }
          else if (data.body['message'] == "chauffeur already exist") {
            this.showAlertMessage('Erreur', 'Un chauffeur avec ' + this.user.numPermis + ' exite déjà', "warning")

          }
          else if (data.body['message'] == "success") {


            this.user.prenom = ""
            this.user.nom = ""
            this.user.adresse = ""
            this.user.telephone = ""
            this.user.email = ""
            this.user.numPermis = ""
            this.user.password = ""
            this.passConf = ""

           
            this.showAlertMessage("Success", "Inscription réussie", "success")
            window.location.reload();
            this.router.navigate(["/home/chauffeur"])
            console.log('Inscription reussi')
          }

        },
        
      })
  }
 
  async showAlertMessage(title: string, message: string, icon: any, showCancelButton = true) {
    console.log('Inside showAlertMessage function');  
    const result = await Swal.fire({
      title: title,
      text: message,
      icon: icon,
      showCloseButton: true,
      showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Retour',
    });
    console.log('After Swal.fire'); 
    if (result.isConfirmed) {
      if (icon == "warning") {

        this.router.navigate(["/home/createChauffeur"]);
      }
      if (icon == "success") {

        this.router.navigate(["/home/chauffeur"]);
      }

    }
  }
}

