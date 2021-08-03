import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  usuario: any = {
    name: null,
    lastName: null
  }

  model: NgbDateStruct | undefined;

  iconCalendar = faCalendarAlt

  onSubmit(form: any){
    console.log(form);
  }

  constructor(private http: HttpClient) { }

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