import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../klasy/user.model';
import { CurrentSessionService } from '../services/current-session';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userSession: User;

  constructor(private userService: UserService, private currentSession: CurrentSessionService) {
    console.log('Constructor executed.');
  }

  ngOnInit() {
    this.currentSession.userSession$.subscribe((userSession) => {
      this.userSession = userSession;
    });

    // Inicjalizacja wartości sesji po załadowaniu komponentu
    this.loadUserSession();
    console.log('ngOnInit executed.');
  }

  private loadUserSession() {
    const storedSession = localStorage.getItem('session');
    if (storedSession) {
      const userId = JSON.parse(storedSession)._id; // Poprawa pobierania ID zapisanego użytkownika
      const foundUser = this.userService.users.find((user) => user.id === userId);
      this.currentSession.setUserSession(foundUser);
    } else {
      this.currentSession.setUserSession(null);
    }
  }

  isLoggedIn(): boolean {
    this.loadUserSession();
    return !!this.userSession?.id; // Zwraca true, jeśli użytkownik jest zalogowany
  }

  isAdmin(): boolean {
    this.loadUserSession();
    return this.userSession?.id === 1; // Zwraca true, jeśli użytkownik jest zalogowany i jest administratorem
  }

  logout() {
    this.userService.logout();
    this.loadUserSession();
  }
}