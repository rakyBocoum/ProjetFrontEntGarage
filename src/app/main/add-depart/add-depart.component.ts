import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartService } from 'src/app/service/depart.service';
import Swal from 'sweetalert2';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-add-depart',
  templateUrl: './add-depart.component.html',
  styleUrls: ['./add-depart.component.css']
})
export class AddDepartComponent 
{
    id:any;
    depart:any=[];
    chaine = new Date()
    constructor(private router: Router, private route: ActivatedRoute, private departService: DepartService) { }
    ngOnInit() {
      this.route.queryParamMap.subscribe(params => {
        this.id = params.get('id');

        console.log('Valeur du paramètre "id" :', this.id);
      })
    }
  






    ajouterDepart()
    {
      if(parseInt(this.depart.dateHeure.substring(0,4)) == this.chaine.getFullYear() 
      && parseInt(this.depart.dateHeure.substring(5,7)) >= this.chaine.getMonth()+1 
      && parseInt(this.depart.dateHeure.substring(5,7 ))<=12
      && parseInt(this.depart.dateHeure.substring(8,10 ))>=this.chaine.getDate()
       && parseInt(this.depart.dateHeure.substring(8,10 ))>0
      && parseInt(this.depart.dateHeure.substring(8,10 ))<= 31
      && this.depart.dateHeure.length ==16
      && parseInt(this.depart.dateHeure.substring(11,13 ))<= 23
      && parseInt(this.depart.dateHeure.substring(14,16 ))<= 59){
  
      this.departService.addDepart(
        this.id,
        this.depart.dateHeure,
        this.depart.destination
        ).subscribe(
          {
          next:(data)=>{
            if(data.body.message =="success"){
              this.showAlertMessage("Success","Depart ajoute ","success");
              this.router.navigate(["/home/depart"]);
            }else{
              console.log(data.body.message)
              this.showAlertMessage("Error","Error when saving informations ","warning")
            }

          },error:(err) => {
            console.log(err);
            this.showAlertMessage("Error","Internal server error","warning")

          }
        })
      
    
          
      }
    }
    showAlertMessage( title:string, message:string, icon:any ,showCancelButton = true)
    {
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
              window.location.reload();
              this.router.navigate(["/home/voiture"])
            }
    
          }
      })
    }

  }

