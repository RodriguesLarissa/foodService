import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './clientes/registration/registration.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { EditComponent } from './clientes/edit/edit.component';
import { UsersService } from './services/users.service';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomepageComponent,
    ListaClientesComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [{ provide: localePt, useValue: 'pt'},
    UsersService,
    ListaClientesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
