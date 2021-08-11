import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faChevronDown, faEdit, faPlusCircle, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {

  public menus!: Menu[];

  addButton = faPlusCircle;
  deleteUserIcon = faTrashAlt;
  userEditIcon = faEdit;
  chevronDown = faChevronDown;
  closeButton = faTimes;

  public deleteMenu!: Menu;
  
  constructor(private menuService: MenuService,
              private router: Router) { }

  ngOnInit() {
    this.getMenu();
  }

  ngDoCheck()	{
    this.getMenu();
  }

  public getMenu(): void {
    this.menuService.getMenu().subscribe(
      (response: Menu[]) => {
        this.menus = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(menu: Menu): void {
    const container:any = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    this.deleteMenu = menu;
    button.setAttribute('data-bs-target', '#deleteMenuModal');
    container.appendChild(button);
    button.click();
  }

  public onDeleteMenu(menuId: number): void {
    this.menuService.deleteMenu(menuId).subscribe(
      (response: void) => {
        console.log(response);
        this.getMenu();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  openEditPage(menu: Menu){
    this.menuService.setMenu(menu);
    console.log("oi")
  }

}
