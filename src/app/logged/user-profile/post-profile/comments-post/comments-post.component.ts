import {Component, ElementRef, Input} from '@angular/core';
import {Post} from "../../../../klasy/post.model";
import {UserService} from "../../../../services/user.service";
import {Comment} from "../../../../klasy/comment.model";

@Component({
  selector: 'app-comments-post',
  templateUrl: './comments-post.component.html',
  styleUrl: './comments-post.component.scss'
})
export class CommentsPostComponent {
  @Input() public comment: Comment;
  constructor(private userService: UserService,private element: ElementRef) {
  }

}
