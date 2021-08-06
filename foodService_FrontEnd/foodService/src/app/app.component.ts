import { Component } from '@angular/core';
import { faSignInAlt, faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodService';
  faUser = faUser
  faLogin = faSignInAlt


  // public onAddEmloyee(addForm: NgForm): void {
  //   document.getElementById('add-Users-form').click();
  //   this.usersService.addUsers(addForm.value).subscribe(
  //     (response: Users) => {
  //       console.log(response);
  //       this.getUsers();
  //       addForm.reset();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //       addForm.reset();
  //     }
  //   );
  // }

  // public onUpdateEmloyee(Users: Users): void {
  //   this.usersService.updateUsers(Users).subscribe(
  //     (response: Users) => {
  //       console.log(response);
  //       this.getUsers();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public onDeleteEmloyee(UsersId: number): void {
  //   this.usersService.deleteUsers(UsersId).subscribe(
  //     (response: void) => {
  //       console.log(response);
  //       this.getUsers();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  // public searchUserss(key: string): void {
  //   console.log(key);
  //   const results: Users[] = [];
  //   for (const Users of this.Users) {
  //     if (Users.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || Users.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || Users.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || Users.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
  //       results.push(Users);
  //     }
  //   }
  //   this.Users = results;
  //   if (results.length === 0 || !key) {
  //     this.getUsers();
  //   }
  // }

  // public onOpenModal(Users: Users, mode: string): void {
  //   const container = document.getElementById('main-container');
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.style.display = 'none';
  //   button.setAttribute('data-toggle', 'modal');
  //   if (mode === 'add') {
  //     button.setAttribute('data-target', '#addUsersModal');
  //   }
  //   if (mode === 'edit') {
  //     this.editUsers = Users;
  //     button.setAttribute('data-target', '#updateUsersModal');
  //   }
  //   if (mode === 'delete') {
  //     this.deleteUsers = Users;
  //     button.setAttribute('data-target', '#deleteUsersModal');
  //   }
  //   container.appendChild(button);
  //   button.click();
  // }

}
