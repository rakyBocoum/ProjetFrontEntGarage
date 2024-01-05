import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartService } from 'src/app/service/depart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-passager-depart',
  templateUrl: './passager-depart.component.html',
  styleUrls: ['./passager-depart.component.css']
})
export class PassagerDepartComponent 
{
  id:any;
  dateHeure:any
  
  destination:any;
  passagers:any=[];
  depart:any=[];
  constructor(private router: Router, private route: ActivatedRoute, private departService: DepartService) { }
  ngOnInit():void {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id');
      this.dateHeure= params.get('dateHeure');
      
      this.destination = params.get('destination');
      this.getPassager()
      this.departService.getDepartById(this.id,this.dateHeure).subscribe({
        next:(response) =>{
          console.log(response.body.message);
            if(response.body.message == "success"){
              
              this.depart = response.body.depart;
            }
            console.log(this.depart);
            //this.router.navigate(["voiture"]);
        },error:(err) => {
          console.log(err);}
      })
    
      console.log('Valeur du paramètre "id" et "dateHeure" et"destination" :', this.id,this.dateHeure,this.destination);
    })
  }
    getPassager(){
      this.departService.getPassager(
        this.id,
        this.dateHeure,

        this.destination
      ).subscribe({
        next:(response) =>{
          console.log(response.body.message);
            if(response.body.message == "success"){
              
              this.passagers = response.body.passagers;
            }
            console.log(this.passagers);
            //this.router.navigate(["voiture"]);
        },error:(err) => {
          console.log(err);}
      })
    }
    deletePassagerDepart(id :any,dateHeure :any,passager_id :any,destination:any){
      this.departService.deletePassager(id,dateHeure,passager_id,destination).subscribe({
        next:(data)=>{
          if(data.body.message =="success"){
            this.showAlertMessage("Success","Passager Depart deleted successfully","success")
            window.location.reload()

          }
          else{
            console.log(data.body.message)
            this.showAlertMessage("Error","Error when deleting Passager Depart","error")
          }
    
        },
        error:(err) => {
          console.log(err);
          this.showAlertMessage("Error","Internal Server Error","error")
    
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
              window.location.reload()
              this.router.navigate(["/home/passagerDepart"])
            }
    
          }
      })
    }
    
  }


  
  



