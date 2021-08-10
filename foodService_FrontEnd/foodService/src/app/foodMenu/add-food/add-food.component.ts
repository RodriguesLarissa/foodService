import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { MenuService } from 'src/app/services/menu.service';
import { ListFoodComponent } from '../list-food/list-food.component';
import { Menu } from '../menu';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  backButton = faArrowCircleLeft;

  onSubmit(addForm: NgForm): void{
    //this.listFoodComponent.getMenu();
    this.router.navigateByUrl('/menu');
    this.menuService.addMenu(addForm.value).subscribe(
      (response: Menu) => {
        console.log(response);
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  
  constructor(private menuService: MenuService,
              private listFoodComponent: ListFoodComponent,
              private router: Router) { }

  ngOnInit(): void {
  }

}
