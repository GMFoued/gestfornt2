import { Component } from '@angular/core';
import { Client } from '../../models/client.model';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.component.html',
  styleUrl: './ajout-client.component.css'
})
export class AjoutClientComponent {
   client :Client = {
    nom:'',
    fonction:'',
    salaire:''
   };
   submitted = false;
constructor(private clientService :ClientService){}

saveClient(): void {
  const data = {
    nom: this.client.nom,
    fonction: this.client.fonction,
    salaire: this.client.salaire
  };
  this.clientService.create(data).subscribe({
    next : (res) => {
      console.log(res);
      this.submitted=true;
    },
    error:(e) => console.error(e)
  });
}

newClient():void{
  this.submitted = false;
  this.client = {
    nom : '',
    fonction:'',
    salaire:''
  };
}
}
