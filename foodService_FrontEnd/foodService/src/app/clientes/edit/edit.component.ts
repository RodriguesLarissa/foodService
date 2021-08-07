import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faArrowCircleLeft, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

import { ListaClientesComponent } from '../lista-clientes/lista-clientes.component'
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../users';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public editUser!: Users;
  model: NgbDateStruct | undefined;

  iconCalendar = faCalendarAlt
  backButton = faArrowCircleLeft

  onSubmit(user: Users): void{
    document.getElementById("backButton")?.click();
    this.userService.updateUsers(user).subscribe(
      (response: Users) => {
        console.log(response);
        this.listaClienteComponent.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  constructor(private http: HttpClient,
    private userService: UsersService,
    private listaClienteComponent: ListaClientesComponent,
    private router: Router) { }

  ngOnInit(): void {
    if(this.userService.getUser() == null){
      this.router.navigateByUrl('/clientes');
    }
    else{
      this.editUser = this.userService.getUser();
      console.log(this.editUser);
    }
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
      endereco: {
        street: dados.logradouro,
        complement: dados.complemento,
        district: dados.bairro,
        city: dados.localidade,
        state: dados.uf
      }
    });
  }

}