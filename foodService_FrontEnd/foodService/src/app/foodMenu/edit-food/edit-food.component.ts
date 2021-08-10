import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from 'src/app/services/menu.service';
import { ListFoodComponent } from '../list-food/list-food.component';
import { Menu } from '../menu';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {

  public editMenu!: Menu;

  backButton = faArrowCircleLeft;

  onSubmit(menu: Menu): void{
    this.listaMenuComponent.getMenu();
    this.router.navigateByUrl('/menu');
    this.menuService.updateMenu(menu).subscribe(
      (response: Menu) => {
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  constructor(private menuService: MenuService,
              private listaMenuComponent: ListFoodComponent,
              private router: Router) { }

ngOnInit(): void {
  if(this.menuService.getMenu() == null){
    this.router.navigateByUrl('/menu');
  }
  else{
    this.editMenu = this.menuService.getMenus();
    console.log(this.editMenu);
  }
}

}
