import { Component, ElementRef, Input } from '@angular/core';
import { User } from "../../../klasy/user.model";
import { Post } from "../../../klasy/post.model";
import { UserService } from "../../../services/user.service";
import {UserHttpServiceService} from "../../../services/user-http-service.service";

@Component({
  selector: 'app-post-profile',
  templateUrl: './post-profile.component.html',
  styleUrls: ['./post-profile.component.scss']
})
export class PostProfileComponent {
  @Input() public post: Post;
  public editing: boolean = false;
  public editedContent: String = "";
  public editedTitle: String = "";

  constructor(private userService: UserService, private element: ElementRef,private userHttpService: UserHttpServiceService) {
  }
  exitEditingPost(): void{
    this.editing = false;
  }
  editPost(): void {

    console.log("Wejście do edycji posta")

    if (this.editing) {
      console.log("ifEditing" + this.editing)
      const editedPost = new Post(
        this.post.id,
        this.post.idUsera,
        this.editedTitle,
        this.editedContent,
        true,
        this.post.liczbaLikow,
        [],
        this.post.comments
      );
      console.log("userServicehttp" + this.editing)

      this.userService.editUserPost(this.userService.session._id, editedPost);
      this.editing = false;


      // TEST1  2
      //SUBSCRIBE JEST DEPRICATED
      // this.userHttpService.editPost(editedPost.id, editedPost).subscribe(
      //   () => {
      //     // Opcjonalnie obsłuż sukces
      //     this.userService.editUserPost(this.userService.session.id, editedPost);
      //     this.editing = false;
      //   },
      //   (error) => {
      //     // Obsługa błędu
      //     console.error('Błąd podczas edycji posta:', error);
      //     // Tutaj możesz dodać powiadomienie dla użytkownika lub inne działania
      //   }
      // );

    } else {
      console.log("Warunek else w edycji stan editing ->" + this.editing)
      this.editing = true;
      this.editedContent = this.post.content;
      this.editedTitle = this.post.title;
    }
  }

}
