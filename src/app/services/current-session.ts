import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../klasy/user.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentSessionService {
  private userSessionSubject = new BehaviorSubject<User>(null);
  userSession$: Observable<User> = this.userSessionSubject.asObservable();

  setUserSession(userSession: User): void {
    this.userSessionSubject.next(userSession);
  }
}