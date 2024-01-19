import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserService} from "./services/user.service";

export const authGuard: CanActivateFn = (route, state) => {
  if(inject(UserService).session && inject(UserService).session._id === 1)
  {
    return true;
  }

  inject(Router).navigateByUrl('/');
  return false;
};
