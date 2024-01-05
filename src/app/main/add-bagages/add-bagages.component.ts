import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { PassagerService } from 'src/app/service/passager.service';
import Swal from 'sweetalert2';
//import { VoitureService } from 'src/app/service/voiture.service';

@Component({
  selector: 'app-add-bagages',
  templateUrl: './add-bagages.component.html',
  styleUrls: ['./add-bagages.component.css']
})
export class
 AddBagagesComponent {
  id: any;
  destination: any;
  dateHeure:any;
  bagage: any = [];
  constructor(private router: Router, private route: ActivatedRoute, private passagerService: PassagerService,private location: Location) { }
  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      this.dateHeure=params.get('dateHeure');
      


      console.log('Valeur du paramètre "id"et de la date est "date" :', this.id,+" "+ this.dateHeure);
    })
  }
  ajouterBagages() {
    this.passagerService.addBagage(
      this.id,
      this.bagage.libelle,
      this.bagage.quantite,
      this.dateHeure
    )
  
  .subscribe({
    next:(data) => {
      if (data.body.message == "success") {
        this.location.back();
        this.router.navigate(["/home/passagerDepart"])

      }
      else {
        console.log(data.body.message)
        window.location.reload();
        this.showAlertMessage("Error", "Error when adding bagages ", "warning")
      }

    },
      error: (err) => {
        console.log(err);
        window.location.reload();
        this.showAlertMessage("Error", "Erreur au niveau du serveur", "warning")

      }
  })
}
showAlertMessage( title:string, message:string, icon:any ,showCancelButton = true){
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

  }).then((result)=>{
      if(result.isConfirmed){
        if(icon == "warning"){

          this.router.navigate(["/home/passager"])
        }

      }
  })
}
}

