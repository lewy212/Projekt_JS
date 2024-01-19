import {Component, inject} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../klasy/user.model";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  user: User;
  constructor(private userService: UserService) {

    const userId = this.userService.session._id;
    const foundUser = this.userService.users.find(user => user.id === userId);
    this.user = foundUser;
  }


}
