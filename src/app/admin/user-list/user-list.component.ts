import { Component } from '@angular/core';
import {User} from "../../klasy/user.model";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: User[];
  constructor(private userService: UserService,private router: Router) {
    this.users = this.userService.users;
  }
  zarejestruj_uzytkownika(){
    this.router.navigate(['/user-formularz'])
  }
}
