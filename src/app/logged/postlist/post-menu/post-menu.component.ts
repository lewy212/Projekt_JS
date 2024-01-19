import {Component, Input} from '@angular/core';
import {Post} from "../../../klasy/post.model";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {PostListComponent} from "../postlist.component";
import {PostPoIdComponent} from "../post-po-id/post-po-id.component";

@Component({
  selector: 'app-post-menu',
  templateUrl: './post-menu.component.html',
  styleUrl: './post-menu.component.scss'
})
export class PostMenuComponent {
  @Input() post: Post;
  constructor(public dialog: MatDialog) {
  }
  openDialog():void{
    let dialogRef = null;
    dialogRef = this.dialog.open(PostPoIdComponent,{
      width:'70%',
      data: { post: this.post }
    });
    dialogRef.afterClosed().subscribe(result=>{

    })
  }
}
