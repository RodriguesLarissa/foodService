import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Users } from '../../users/users';
import { UsersService } from '../../users/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  public users: Users[] = [];
  form!: FormGroup;
  picker:any;

  constructor(private userService: UsersService,
              private fb: FormBuilder  ) { }

  onSubmit(form: any){
    console.log(form);
    
  }

  ngOnInit(){
    this.getUsers();
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      email: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250), Validators.email]],
      phone: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      birthday: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      street: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      number: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      cep: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      city: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      state: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
      country: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  public getUsers(): void{
    this.userService.getUsers().subscribe(
      (response: Users[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



}
