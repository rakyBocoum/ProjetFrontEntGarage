import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VoitureService } from 'src/app/service/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent {
  id : any ;
  voiture: any = [];

  
constructor(private router :Router, private route  : ActivatedRoute,private voitureService :VoitureService,private location:Location){}
ngOnInit() {
  this.route.queryParamMap.subscribe(params => {
    this.id = params.get('id');

      console.log('Valeur du paramètre "id" :', this.id);
    })
  }

ajoutervoiture(){
  this.voitureService.addVoiture(
    this.id,
    this.voiture.type,
    this.voiture.matricule
    
  )
  .subscribe({
    next:(data) => {
       if(data.body.message == "successfully"){
        this.location.back();
        this.showAlertMessage("success","Voiture ajoutée avec succes ","succes");
        this.router.navigate(["/home/voiture"]);
       
      
      }
      else{
        console.log(data.body.message)
        this.showAlertMessage("Error","Error when creating car ","warning")
      }

    },
    error:(err) => {
      console.log(err);
      this.showAlertMessage("Error","Erreur au niveau du serveur","warning")

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

          this.router.navigate(["/home/ajouterVoiture"])
        }

      }
  })
}

}

