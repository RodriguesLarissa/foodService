import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './home/homepage/homepage.component';
import { RegistrationComponent } from './clientes/registration/registration.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';

const appRoutes: Routes = [

  { path: 'registrar', component: RegistrationComponent },
  { path: 'clientes', component: ListaClientesComponent },
  { path: '', component: HomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }