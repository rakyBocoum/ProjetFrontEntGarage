import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoitureService } from 'src/app/service/voiture.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent {

  voitures : any = [];
   
  constructor(private router: Router, private voitureService : VoitureService){}

  ngOnInit(): void {
    this.getAllVoiture()
}

    getAllVoiture(){
    this.voitureService.getAllVoiture().
    subscribe({
      next:(response) =>{
        console.log(response.body.message);
          if(response.body.message == "successfully"){
            this.voitures = response.body.voitureData
          }
          console.log(this.voitures);
          //this.router.navigate(["voiture"]);
      },error:(err) => {
        console.log(err);}
    })
  }
  deleteVoiture(id:any) {
    this.voitureService.deleteVoiture(id).subscribe({
      next:(data)=>{
        if(data.body.message =="success"){
          window.location.reload();
          this.showAlertMessage("Success","voiture deleted successfully","success")
        }
        else{
          console.log(data.body.message)
          this.showAlertMessage("Error","Error when deleting ","warning")
        }
  
      },
      error:(err) => {
        console.log(err);
        this.showAlertMessage("Error","Erreur au niveau du serveur","danger")
  
      }
    })
  }
  showAlertMessage( title:string, message:string, icon:any ){
    return Swal.fire({
  
      title: title,
      text: message,
      icon: icon,
      showCloseButton: true,
      showCancelButton: true,
     // confirmButtonColor: '#3085d6',
      //cancelButtonColor: '#d33',
      //cancelButtonText: 'Retour',
  
      // position: 'top-end',
      // timer: 3000
  
      // showCancelButton: showCancelButton,
  
    }).then((result)=>{
        if(result.isConfirmed){
          if(icon == "success"){
  
            this.router.navigate(["/home/voiture"])
          }
  
        }
    })
  }
}

