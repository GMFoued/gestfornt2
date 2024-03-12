import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeClientComponent } from './components/liste-client/liste-client.component';
import { AjoutClientComponent } from './components/ajout-client/ajout-client.component';

const routes: Routes = [
{path:'',redirectTo:'clients',pathMatch:'full'},
{path : 'clients' , component: ListeClientComponent},
{path : 'Ajouter' , component:AjoutClientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
