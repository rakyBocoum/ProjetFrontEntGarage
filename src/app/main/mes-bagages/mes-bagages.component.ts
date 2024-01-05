import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PassagerService } from 'src/app/service/passager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mes-bagages',
  templateUrl: './mes-bagages.component.html',
  styleUrls: ['./mes-bagages.component.css']
})
export class MesBagagesComponent {
  bagages : any = [];
  id:any
  userId:any;
  
   
  constructor(private router: Router,private route: ActivatedRoute, private passagerService : PassagerService){}

  ngOnInit(): void {

      console.log(sessionStorage.getItem('userId'));
      this.userId = sessionStorage.getItem('userId');
        console.log('Valeur du paramètre "id" :', this.userId);
        //console.log(response.body.passager);
       
        this.passagerService.getIdPassager(this.userId).
        subscribe({
              next:(response) =>{
                 console.log(response.body);
                   if(response.body.message == "success"){
                     this.id= response.body.passager.id;
                     console.log(response.body.passager);
                      this.passagerService.getBagPassager(this.id).subscribe({
                       next:(data) => {
                         if(data.body.message == "success"){
                           this.bagages = data.body.bagages
                           console.log(this.bagages);
                         }
                       }
                    
                     })
                   }
                   //console.log(this.bagages);
                   //this.router.navigate(["voiture"]);
               },error:(err) => {
                
               console.log(err);}
               });
   
}
addPerte(bagage:any){
  this.passagerService.addPerte(bagage).subscribe({
    next :(response)=>{
      if(response.message == "success"){
        console.log(response.message);
        this.showAlertMessage("Success"," Declaration enregistrée","success")
      }
      else if(response.message == "existing"){
        console.log(response.message)
        this.showAlertMessage("Warning","La déclaration a déjà été enregistrée","warning")
      }
      else{
        this.showAlertMessage("Error","Erreur lors de la declaration de perte","error")
      }
    }
  })
}

showAlertMessage( title:string, message:string, icon:any,showCancelButton = true ){
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
          
          //this.router.navigate(["/Home/bagages"])
        }
        if(icon == "warning"){
          //this.router.navigate(["/Home/bagages"])
        }
        else (icon == "error")
        {
         // this.router.navigate(["/Home/bagages"])
        }

      }
     
  })
}

  
}
