import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from 'src/app/service/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-voiture',
  templateUrl: './edit-voiture.component.html',
  styleUrls: ['./edit-voiture.component.css']
})
export class EditVoitureComponent {
id : any ;
voiture : any = []









constructor(private router :Router, private route  : ActivatedRoute,private voitureService :VoitureService,private location:Location){}

ngOnInit() : any {
  this.route.queryParamMap.subscribe(params => {
  this.id = params.get('id');
    //console.log('Valeur du paramètre "id" :', this.id);
  }),
  //this.updateChauffeur()

  this.voitureService.getVoitureById(this.id)
  .subscribe({
    next:(data) => {
       if(data.body.message == "success"){
        
        this.voiture = data.body.voiture;
      
        console.log(this.voiture);
      
      
      }
    }
})
}



updateVoiture(){
  this.voitureService.updateVoiture(
    this.id,
    this.voiture.type,
    this.voiture.matricule
    
   )
    .subscribe({
      next:(data) => {
         if(data.body.message == "success"){
          this.location.back();
          this.router.navigate(["/home/voiture"]);
          this.showAlertMessage("Succces","Voiture modifiée avec success ","success")
        
        }
        else{
          console.log(data.body.message)
          this.location.back();
          this.router.navigate(["/home/voiture"]);
          this.showAlertMessage("Error","Error when updating informations ","warning")
        }

      },
      error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Erreur au niveau du serveur","warning")

      }
    })
}



showAlertMessage( title:string, message:string, icon:any ,showCancelButton = true, callback?: () => void){
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
      if(result.isConfirmed && callback){
        callback();
      }
  })
}

}