import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './home/homepage/homepage.component';
import { RegistrationComponent } from './clientes/registration/registration.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { EditComponent } from './clientes/edit/edit.component';
import { AddFoodComponent } from './foodMenu/add-food/add-food.component';
import { ListFoodComponent } from './foodMenu/list-food/list-food.component';
import { EditFoodComponent } from './foodMenu/edit-food/edit-food.component';

const appRoutes: Routes = [

  { path: 'clientes/registrar', component: RegistrationComponent },
  { path: 'clientes', component: ListaClientesComponent },
  { path: 'clientes/editar', component: EditComponent },
  { path: 'menu/registrar', component:  AddFoodComponent},
  { path: 'menu', component:  ListFoodComponent},
  { path: 'menu/editar', component: EditFoodComponent},
  { path: '', component: HomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }