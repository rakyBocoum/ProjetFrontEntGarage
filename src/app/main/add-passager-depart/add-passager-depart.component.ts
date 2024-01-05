import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartService } from 'src/app/service/depart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-passager-depart',
  templateUrl: './add-passager-depart.component.html',
  styleUrls: ['./add-passager-depart.component.css']
})
export class AddPassagerDepartComponent {
id:any;
dateHeure:any
heure:any;
destination:any;
passager:any=[];
constructor(private router: Router, private route: ActivatedRoute, private departService: DepartService) { }
ngOnInit() {
  this.route.queryParamMap.subscribe(params => {
    this.id = params.get('id');
    this.dateHeure= params.get('dateHeure');
   
    this.destination = params.get('destination');

    console.log('Valeur du paramètre "id" et "dateHeure" et"destination" :', this.id,this.dateHeure,this.destination);
  })
}
ajouterPassager(){
  this.departService.addPassagerInDepart(
    this.id,
    this.dateHeure,
    this.destination,
    this.passager.Cni,
  
  )
  .subscribe({
    next:(response) => {
      if (response.body.message == "success") {
        console.log(response.body);
        this.showAlertMessage("Succes", "passager ajouté(e) ", "success")
        this.router.navigate(["/home/depart"])

      }
      else {
        console.log(response.body.message)
        this.showAlertMessage("Error", "Error when adding passager ", "warning")
      }

    },
      error: (err) => {
        console.log(err);
        this.showAlertMessage("Error", "Erreur au niveau du serveur", "warning")

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
          this.router.navigate(["/home/depart"])
        }

      }
  })
}
}

