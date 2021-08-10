import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Menu } from '../foodMenu/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiServerUrl = environment.apiBaseUrl;
  private menu!: Menu;

  public getMenus(): Menu {
    return this.menu;
  }
  public setMenu(value: Menu) {
    this.menu = value;
  }

  constructor(private http: HttpClient){}

  public getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(`${this.apiServerUrl}/menu/all`);
  }

  public addMenu(menu: Menu): Observable<Menu> {
    return this.http.post<Menu>(`${this.apiServerUrl}/menu/add`, menu);
  }

  public updateMenu(menu: Menu): Observable<Menu> {
    return this.http.put<Menu>(`${this.apiServerUrl}/menu/update`, menu);
  } 

  public deleteMenu(menuId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/menu/delete/${menuId}`);
  }

  public findMenu(menuId: number): Observable<Menu> {
    return this.http.get<Menu>(`${this.apiServerUrl}/menu/find/${menuId}`);
  }
}
