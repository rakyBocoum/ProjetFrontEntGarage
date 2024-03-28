import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-passager',
  templateUrl: './add-passager.component.html',
  styleUrls: ['./add-passager.component.css']
})
export class AddPassagerComponent {
  user: any = []
  passConf!: string

  passError = false;
  passConfError = false;
  emailError = false;


  constructor(private user_service: UserService, private router: Router, private location: Location) { }


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
    this.user_service.creerUserPassager(
      this.user.prenom,
      this.user.nom,
      this.user.adresse,
      this.user.telephone,
      this.user.email,
      this.user.password,
      this.user.Cni
    ).subscribe(
      {
        next: (data) => {
          console.log('Le message renvoye '+data.body.error);
          
          if(data.body['message']==="success"){
            this.location.back();
            this.router.navigate(["/home/passager"]);
            this.showAlertMessage("Success", "Passager ajouté(e) avec success ", "success");
             }
   
          else if (data.body['error']=== "already") {
            this.showAlertMessage('Erreur', 'Un compte avec ' + this.user.email + ' exite déjà', 'warning');
          }
          else if (data.body['error'] === "CNI already") {
            this.showAlertMessage('Erreur', 'Un compte avec ' + this.user.Cni + ' exite déjà', 'warning');
          }

        
    }  });

  }
  showAlertMessage(title: string, message: string, icon: any) {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      showCloseButton: true,
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (icon == 'success') {
          this.router.navigate(['/home/passager']);
        }
      }
    });
  }


}
