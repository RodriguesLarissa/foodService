import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Users } from './users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiServerURL = environment.apiBaseURL;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(`${this.apiServerURL}/users/all`);
  }

  public addUsers(user: Users): Observable<Users>{
    return this.http.post<Users>(`${this.apiServerURL}/users/add`, user);
  }

  public updateUsers(user: Users): Observable<Users>{
    return this.http.put<Users>(`${this.apiServerURL}/users/update`, user);
  }

  public deleteUsers(userId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerURL}/users/delete/${userId}`);
  }
}
