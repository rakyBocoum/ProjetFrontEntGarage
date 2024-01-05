import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PassagerService } from 'src/app/service/passager.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.css']
})
export class PassagerComponent {

  passagers : any = [];
   
  constructor(private router: Router, private passagerService : PassagerService){}

  ngOnInit(): void {
    this.getAllPassager()
}

    getAllPassager(){
    this.passagerService.getAllPassager().
    subscribe({
      next:(response) =>{
        console.log(response.body.message);
          if(response.body.message == "success"){
            this.passagers = response.body.passagers
          }
          console.log(this.passagers);
          //this.router.navigate(["voiture"]);
      },error:(err) => {
        console.log(err);}
    })
  }

  deletePassager(id :any){
    this.passagerService.deletePassager(id).subscribe({
      next:(data)=>{
        if(data.body.message =="success"){
          this.showAlertMessage("Success","Passager deleted successfully","success");
          this.getAllPassager();
         
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
  
  async showAlertMessage( title:string, message:string, icon:any ){

    console.log('Inside showAlertMessage function');  
    const result = await Swal.fire({
      title: title,
      text: message,
      icon: icon,
      showCloseButton: true,
      showCancelButton: true,
    });
    console.log('After Swal.fire'); 
    if (result.isConfirmed) {
      if (icon == "success") {

        this.router.navigate(["/home/passager"]);
      }

    }
  }
}