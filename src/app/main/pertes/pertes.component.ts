import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BagagesService } from 'src/app/service/bagages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pertes',
  templateUrl: './pertes.component.html',
  styleUrls: ['./pertes.component.css']
})
export class PertesComponent {
  id:any
  pertes:any;
  totalPertes: number = 0;
  constructor( private router:Router,  private bagagesService : BagagesService ,private route: ActivatedRoute){}
  ngOnInit():void {
    this.getPerte();
   
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('Valeur du paramètre "id" :', this.id);
  }
  
  retrouverBagage(bagageId: any,user:any )
  {
    // Appelez le service pour retrouver le bagage avec l'ID
    this.bagagesService.sendEmail (user).subscribe(
      {
          next:(response)=>
          {
            console.log(response);
            if(response.message === "success"){
              console.log(response.message);
              this.bagagesService.retrouver(bagageId).subscribe({
                next: (response) => {
                  
                  if (response.message === "success") {
          
                    
                    this.showAlertMessage("Success", "Bagages retrouvés", "success");
                    window.location.reload();
                  } else if (response.message === "existing") {
                    console.log(response.message);
                    this.showAlertMessage("Warning", "La déclaration a déjà été enregistrée", "warning");
                  } else {
                    this.showAlertMessage("Error", "Error of retrieving bagages", "error");
                  }
                },
                error: (err) => {
                  console.error(err);
                  this.showAlertMessage("Error", "Error of retrieving bagages", "error");
                }
              });

            }
          }
    })
        

    
  }

  getPerte(){
    this.bagagesService.getPerte().subscribe({
      next:(response) =>{
        console.log(response);
        //console.log('Response from server:', response);
        //console.log(response.body.message);
          if(response.body.message == "success"){
            this.pertes = response.body.pertes
            
          }
          
          console.log(this.pertes);
          
      },error:(err) => {
        console.log(err);}
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
