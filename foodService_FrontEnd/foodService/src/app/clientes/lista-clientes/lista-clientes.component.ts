import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faCalendarAlt, faEdit, faInfoCircle, faTrashAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../users';


@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  public users!: Users[];
  public editUsers!: Users;
  public deleteUsers!: Users;
  public user!: Users;
  public infoUser!: Users;

  infoIcon = faInfoCircle;
  addUserIcon = faUserPlus;
  deleteUserIcon = faTrashAlt;
  userEditIcon = faEdit;
  iconCalendar = faCalendarAlt;

  model!: NgbDateStruct;

  constructor(private usersService: UsersService,
              private http: HttpClient){}

  ngOnInit() {
    this.getUsers();
  }

  openEditPage(user: Users){
    if(user.birthday != null){
      user.birthday = user.birthday.substring(0,10);
    }
    this.usersService.setUser(user);
  }

  consultaCEP(cep: any, form: any) {
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

  public getUsers(): void {
    this.usersService.getUsers().subscribe(
      (response: Users[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(user: Users, mode: string): void {
    const container:any = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'info') {
      this.infoUser = user;
      if(user.birthday != null){
        user.birthday = user.birthday.substring(0,10);
      }
      button.setAttribute('data-bs-target', '#infoUsersModal');
    }
    if (mode === 'delete') {
      this.deleteUsers = user;
      button.setAttribute('data-bs-target', '#deleteUsersModal');
    }
    container.appendChild(button);
    button.click();
  }

  public onDeleteUser(userId: number): void {
    this.usersService.deleteUsers(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
