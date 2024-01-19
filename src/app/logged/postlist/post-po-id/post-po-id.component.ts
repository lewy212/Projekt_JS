import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Post } from "../../../klasy/post.model";

@Component({
  selector: 'app-post-po-id',
  templateUrl: './post-po-id.component.html',
  styleUrls: ['./post-po-id.component.scss']
})
export class PostPoIdComponent {
  postPoEdycji: Post;
  post: Post

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.postPoEdycji = data.post;

    this.post=this.postPoEdycji.previousEditions[0];

  }
}
