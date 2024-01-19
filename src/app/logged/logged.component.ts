import { Component } from '@angular/core';
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrl: './logged.component.scss'
})
export class LoggedComponent {
  constructor(private userService: UserService) {
  }
  logout() {
    this.userService.logout();
  }
}
