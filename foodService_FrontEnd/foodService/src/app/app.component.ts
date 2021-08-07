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
}
