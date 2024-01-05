import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Action } from 'rxjs/internal/scheduler/Action';
//import { DepartService } from 'src/app/service/depart.service';
import { PassagerService } from 'src/app/service/passager.service';

@Component({
  selector: 'app-mes-departs',
  templateUrl: './mes-departs.component.html',
  styleUrls: ['./mes-departs.component.css']
})
export class MesDepartsComponent {
  departs : any = [];
  id:any
  userId:any;
  constructor(private router: Router,private route:ActivatedRoute, private passagerService : PassagerService){}
  ngOnInit() {
    this.id=sessionStorage.getItem('userId')
    this.getMesDeparts();
   
  }
getMesDeparts(){
  this.passagerService.getIdPassagerDepart(this.id).subscribe({
    next:(response) =>{
      
        if(response.body.message == "success"){
          console.log(response.body.message);
          this.departs = response.body.departData;
        }
        console.log(this.departs);
        //this.router.navigate(["voiture"]);
    },error:(err) => {
      console.log(err);}
  })

  //console.log('Valeur du paramètre "id" et "dateHeure" et"destination" :', this.id,this.dateHeure,this.destination);

}
}
