import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './home/homepage/homepage.component';
import { RegistrationComponent } from './registration/registration/registration.component';

const appRoutes: Routes = [

  { path: 'registrar', component: RegistrationComponent },
  { path: '', component: HomepageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
