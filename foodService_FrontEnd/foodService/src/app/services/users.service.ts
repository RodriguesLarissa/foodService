import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../clientes/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiServerUrl = environment.apiBaseUrl;
  private user!: Users;

  public getUser(): Users {
    return this.user;
  }
  public setUser(value: Users) {
    this.user = value;
  }

  constructor(private http: HttpClient){}

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiServerUrl}/users/all`);
  }

  public addUsers(users: Users): Observable<Users> {
    return this.http.post<Users>(`${this.apiServerUrl}/users/add`, users);
  }

  public updateUsers(users: Users): Observable<Users> {
    return this.http.put<Users>(`${this.apiServerUrl}/users/update`, users);
  } 

  public deleteUsers(usersId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/users/delete/${usersId}`);
  }

  public findUser(usersId: number): Observable<Users> {
    return this.http.get<Users>(`${this.apiServerUrl}/users/find/${usersId}`);
  }

}
