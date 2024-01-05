import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PassagerService } from 'src/app/service/passager.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-bagage',
  templateUrl: './edit-bagage.component.html',
  styleUrls: ['./edit-bagage.component.css']
})
export class EditBagageComponent {
  id : any ;
  bagage : any = []
  idPassager:any ;


  constructor(private router :Router, private route  : ActivatedRoute,private passagerService :PassagerService){}
  ngOnInit() : any {
  
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
  
        console.log('Valeur du paramètre "id" :', this.id);
      })
     
    }
  
    updateBagage()
    {
      this.passagerService.updateBagage(
        this.id,
        this.bagage.libelle,
        this.bagage.quantite,
        
      ).subscribe({
        next:(data) => {
            
           if(data.body.message == "success"){
            this.idPassager=data.body.idPassager;
            console.log(this.idPassager)
           //this.router.navigate(["/home/bagage/${this.idPassager}"]);
           //this.router.navigate([`/home/bagage/${this.idPassager}`]);
           //this.router.navigate(["/home/bagage&id="+this.idPassager]);
           window.location.reload();
           this.router.navigate(["/home/passager"]);

           this.showAlertMessage("Succes","Bagage modifié avec succes","success")
          
          }
          else{
            console.log(data.body.message)
            this.showAlertMessage("Error","Error when updating informations ","warning")
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
            if(icon == "success"){
              window.location.reload();
              this.router.navigate(["/home/passager"]);
              //this.router.navigate(["/home/bagage&id="+this.idPassager]);

            }
    
          }
      })
    }
  }
