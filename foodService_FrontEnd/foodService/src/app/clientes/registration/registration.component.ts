import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faArrowCircleLeft, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component'
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../users';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  model: NgbDateStruct | undefined;
 

  iconCalendar = faCalendarAlt
  backButton = faArrowCircleLeft

  onSubmit(addForm: NgForm): void{
    this.listaClienteComponent.getUsers();
    document.getElementById("backButton")?.click();
    addForm.value.birthday =  this.parserFormatter.format(addForm.value.birthday)
    this.userService.addUsers(addForm.value).subscribe(
      (response: Users) => {
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  constructor(private http: HttpClient,
              private userService: UsersService,
              private parserFormatter: NgbDateParserFormatter,
              private listaClienteComponent: ListaClientesComponent) { }

  ngOnInit(): void {

  }

  consultaCEP(cep: any, form: any) {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if(cep != ""){

      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((dados: any) => this.populaDadosForm(dados, form));
      }

    }
  }

  populaDadosForm(dados: any, formulario: any) {
    formulario.form.patchValue({
      street: dados.logradouro,
      complement: dados.complemento,
      district: dados.bairro,
      city: dados.localidade,
      state: dados.uf
    });
  }

}