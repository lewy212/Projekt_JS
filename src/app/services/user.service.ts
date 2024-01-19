import { Injectable } from '@angular/core';
import {User} from "../klasy/user.model";
import {Post} from "../klasy/post.model";
import {Router} from "@angular/router";
import {Comment} from "../klasy/comment.model";
import {BehaviorSubject, catchError, Observable, of} from 'rxjs';
import {UserHttpServiceService} from "./user-http-service.service";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSessionSubject = new BehaviorSubject<User>(null);
  userSession$ = this.userSessionSubject.asObservable();
  users: User[] = [];
  session: any;


  //Element potrzeby do listy postów
  getUserList() {
    //let user: User[] = this.users;
    return this.users;
  }

  deleteUserById(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1 && index!==0) {
      this.users.splice(index, 1);
    }
  }
  addUser(email,nickname,password,name,surname)
  {
    this.users.push(new User(this.users.length+1,email,nickname,password,name,surname,null,null,null))
  }


  constructor(private router: Router, private http: UserHttpServiceService) {
    this.session = this.retrieveSessionFromStorage();
    this.userSessionSubject.next(this.session); // Zaktualizuj BehaviorSubject po utworzeniu instancji UserService
    console.log("Sesja w konstruktorze: ", this.session);

    this.http.getUsers().then(list => {
      this.users = list;
    });
  }
  addUserHttp(email,nickname,password,name,surname)
  {
    const nowy = new User(this.users.length+1,email,nickname,password,name,surname,null,null,null);
    this.http.addUserHttp(nowy).subscribe(ret=>this.users.push(nowy))
  }
  deleteUserHttp(userId: number): void {
    this.http.deleteUserHttp(userId).subscribe(() => {
      const index = this.users.findIndex(user => user.id === userId);
      if (index !== -1 && index!==0) {
        console.log("Usuwam: ",this.users.find(user=>user.id === userId))
        this.users.splice(index, 1);
        console.log("testuje po usuneiciu: ",this.users.find(user=>user.id === userId))
      }
    });
  }
  editUserHttp(id,email,nickname,password,name,surname){
    const updatedUser = new User(id, email, nickname, password, name, surname,this.users[id - 1].liczbaObserwujacych ,this.users[id - 1].osobyKtoreObserwuje,this.users[id - 1].posty);

    this.http.editUserHttp(id, updatedUser).subscribe(
      () => {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1 && index !== 0) {
          this.users[index] = updatedUser;
        }
      },
      error => {
        console.error(error.message);
        // Handle the error as needed
      }
    );
  }
  editUser(id,email,nickname,password,name,surname)
  {
    this.users[id-1]= new User(id,email,nickname,password,name,surname,this.users[id-1].liczbaObserwujacych,this.users[id-1].osobyKtoreObserwuje,this.users[id-1].posty);
  }

  private retrieveSessionFromStorage(): User | null {
    const session: any = localStorage.getItem('session');
    return session ? JSON.parse(session) : null;
  }

  private saveSessionToStorage(usersPom: User[] | null): void {
    localStorage.setItem('session', JSON.stringify(usersPom));
  }

  login(username: string, password: string) {
    let user = this.users.find((u) => u.nickname === username && u.password === password);
    if (user) {
      this.session = user;
      this.saveSessionToStorage(this.session); // Zapisz sesję do localStorage
      this.userSessionSubject.next(this.session); // Zaktualizuj BehaviorSubject po zalogowaniu
    }
    console.log("Sesja w loginie: ", this.session);
    return user;
  }
  findUserById(id: number): User{
    return this.users.find(user=>user.id ===id);
  }

  logout(){
    this.retrieveSessionFromStorage();
    this.session = undefined;
    localStorage.removeItem('session');
    this.router.navigateByUrl('/');
  }

  addPost(user: User,post: Post){
   user.posty.push(post);
  }

  editUserPost(userId: number, editedPost: Post): void {
    console.log("editUserPostWService");
    // Znajdź użytkownika na podstawie jego id
    const userIndex = this.users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
      // Znajdź post użytkownika do edycji
      const postIndex = this.users[userIndex].posty.findIndex(post => post.id === editedPost.id);

      if (postIndex !== -1) {
        editedPost.previousEditions.push( this.users[userIndex].posty[postIndex]);

        this.users[userIndex].posty[postIndex] = editedPost;
      }
    }
  }

}
