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

  consultaCEP(cep: any){
    
    cep = cep.replace(/\D/g, '');

    if(cep != ""){

      var validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)){
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((data: any) => { console.log(data); });
      }

    }

  }



}