import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client.model';
@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrl: './liste-client.component.css'
})
export class ListeClientComponent implements OnInit {
clients?: Client[];
currentClient:Client = {};
currentIndex = -1;
nom = '';

constructor(private clientService : ClientService){}

ngOnInit(): void {
  this.retrieveClients();
}

retrieveClients(){
  this.clientService.getAll().subscribe({
    next:(data) => {
      this.clients = data;
      console.log(data);
    },
    error: (e) =>console.error(e)
  });
}

refrechList():void{
  this.retrieveClients();
  this.currentClient = {};
  this.currentIndex = -1;
}

setActiveClient(client:Client,index:number):void {
  this.currentClient = client;
  this.currentIndex = index;
}

removeAllClients():void {
  this.clientService.deleteAll().subscribe({
    next : (res) => {
      console.log(res);
      this.refrechList();
    },
    error:(e) => console.error(e)
  });
}

searchNom():void{
  this.currentClient={};
  this.currentIndex = -1;

  this.clientService.findByNom(this.nom).subscribe({
    next:(data) => {
      this.clients =data;
      console.log(data);
    },
    error:(e) => console.error(e)
   });
}
}
