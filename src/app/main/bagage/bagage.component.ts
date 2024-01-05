import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PassagerService } from 'src/app/service/passager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bagage',
  templateUrl: './bagage.component.html',
  styleUrls: ['./bagage.component.css']
})
export class BagageComponent {
  bagages : any = [];
  id:any
   
  constructor(private router: Router,private route: ActivatedRoute, private passagerService : PassagerService){}

  ngOnInit(): void {
    
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
  
        console.log('Valeur du paramètre "id" :', this.id);
      })
      this.getBagPassager();
      this.deleteBagage(this.id);
}

  getBagPassager(){
    this.passagerService.getBagPassager(this.id).
    subscribe({
      next:(response) =>{
        console.log(response.body);
          if(response.body.message == "success"){
            this.bagages = response.body.bagages
          }
          console.log(this.bagages);
          //this.router.navigate(["voiture"]);
      },error:(err) => {
        console.log(err);}
    })
  }
  deleteBagage(id :any){
    this.passagerService.deleteBagage(id).subscribe({
      next:(data)=>{
        if(data.body.message =="success"){
          window.location.reload();
          this.showAlertMessage("Success","Bagage deleted successfully","success")
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
  updateBagage(id:any){
    
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
  
            this.router.navigate(["/home/bagage"])
          }
  
        }
    })
  }
}
