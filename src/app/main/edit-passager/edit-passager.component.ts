import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PassagerService } from 'src/app/service/passager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-passager',
  templateUrl: './edit-passager.component.html',
  styleUrls: ['./edit-passager.component.css']
})
export class EditPassagerComponent {
  id: any;
  passager: any = []
  user: any = []







  constructor(private router: Router, private route: ActivatedRoute, private passagerService: PassagerService,private location: Location) { }

  ngOnInit(): any {

    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');

      console.log('Valeur du paramètre "id" :', this.id);
    })


    //this.updateChauffeur()

    this.passagerService.getPassagerById(this.id)
      .subscribe({
        next: (data) => {
          if (data.body.message == "success") {
            this.passager = data.body.passager;
            this.user = data.body.user;
            console.log(this.user);
            console.log(this.passager)

          }
        }
      })
  }



  updatePassager() {
    this.passagerService.updatePassager(
      this.id,
      this.user.prenom,
      this.user.nom,
      this.user.adresse,
      this.user.telephone,
      this.passager.Cni)
      .subscribe({
        next: (data) => {
          if (data.body.message == "success") {
            this.location.back();
            this.router.navigate(["/home/passager"]);
            this.showAlertMessage("Success", "Passager modifiée avec success ", "success");


          }
          else {
            console.log(data.body.message)
            this.showAlertMessage("Error", "Error when updating informations ", "warning")
            this.router.navigate(["/home/passager"]);
          }

        },
        error: (err) => {
          console.log(err);
          this.showAlertMessage("Error", "Erreur au niveau du serveur", "warning")

        }
      })
  }



  showAlertMessage(title: string, message: string, icon: any, showCancelButton = true, callback?: () => void) {
    return Swal.fire({

      title: title,
      text: message,
      icon: icon,
      showCloseButton: true,
      showCancelButton: true,
      // confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Retour',

      // position: 'top-end',
      // timer: 3000

      // showCancelButton: showCancelButton,

    }).then((result) => {
      if (result.isConfirmed && callback) {
        callback();

      }
    }
    )
  }

}