import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {User} from "../../../klasy/user.model";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-list-element',
  templateUrl: './user-list-element.component.html',
  styleUrl: './user-list-element.component.scss'
})
export class UserListElementComponent {
  @Input() public user: User;
  @ViewChild('pierwszyDiv') pierwszyDiv: HTMLDivElement;
  zmienna: boolean = false;
  constructor(private userService: UserService, private router: Router,private element: ElementRef) {
  }
  deleteUser() {
    this.userService.deleteUserHttp(this.user.id);
  }
  editUser () {
    this.router.navigate([`allUsers`,this.user.id,'edit']);
  }
}
