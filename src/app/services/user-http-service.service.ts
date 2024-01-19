import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../klasy/user.model";
import {Post} from "../klasy/post.model";
import {Comment} from "../klasy/comment.model";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {
// +'/posts' http://localhost:3000
//   url = '/assets/dane.json';
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.url+'/posts').pipe(
      map((users: any[]) =>
        users.map(user => this.mapUser(user))
      )
    ).toPromise();
  }
  addUserHttp(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.post<User>(this.url+'/posts',user,httpOptions).pipe(catchError(this.handleError<User>('addUser')));
  }
  deleteUserHttp(userId: number): Observable<void> {
    return this.http.delete<void>(this.url + '/posts/' + userId).pipe(
      catchError(this.handleError<void>('deleteUser'))
    );
  }
  editUserHttp(userId: number, user: User): Observable<void> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.put<void>(this.url + '/posts/' + userId, user, httpOptions).pipe(
      catchError(this.handleError<void>('editUser'))
    );
  }

  // editUserHttp(userId: number): Observable<void> {
  //   return this.http.put<void>(this.url + '/posts/' + userId).pipe(
  //     catchError(this.handleError<void>('editedUser'))
  //   );
  // }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }

  private mapUser(user: any): User {
    console.log('Mapped user:', user);
    return new User(
      user._id,
      user._email,
      user._nickname,
      user._password,
      user._name,
      user._surname,
      user._liczbaObserwujacych,
      user._osobyKtoreObserwuje,
      user._posty?.map((post: any) => this.mapPost(post)) || []
    );
  }

  private mapPost(post: any): Post {
    console.log('Mapped post:', post);
    console.log(post._id);
    return new Post(
      post._id,
      post._idUsera,
      post._title,
      post._content,
      post._wasEdited,
      post._liczbaLikow,
      post._previousEditions,
      post._comments?.map((comment: any) => this.mapComment(comment)) || []
    );
  }

  private mapComment(comment: any): Comment {
    console.log('Mapped comment:', comment);
    return new Comment(
      comment._nickname,
      comment._content,
      comment._wasEdited
    );
  }


  //todo: costam
  // editPost(postId: number, updatedPost: Post): Observable<any> {
  //   const url = `${this.url}/${postId}`;
  //
  //   // dane do żądania
  //   const requestBody = {
  //     title: updatedPost.title,
  //     content: updatedPost.content,
  //     // inne pola do aktualizacji
  //   };
  //
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //     body: requestBody, // Przekaż dane w ciele żądania DELETE
  //   };
  //   //żądanie (ale jest w delete także to do zmiany)
  //   return this.http.delete<void>(url, httpOptions).pipe(
  //     catchError(this.handleError<void>('editPost'))
  //   );
  // }

}
