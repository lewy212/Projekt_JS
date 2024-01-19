import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedRoutingModule } from './logged-routing.module';
import { LoggedComponent } from './logged.component';
import {MatButtonModule} from "@angular/material/button";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PostProfileComponent } from './user-profile/post-profile/post-profile.component';
import { CommentsPostComponent } from './user-profile/post-profile/comments-post/comments-post.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostFormularzComponent } from './user-profile/post-formularz/post-formularz.component';
import {MatInputModule} from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { WyszukajPipe } from './wyszukaj.pipe';
import { AddLikeComponent } from './postlist/add-like/add-like.component';
import { CommentFormularzComponent } from './comment-formularz/comment-formularz.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from "@angular/material/icon";
import { PostMenuComponent } from './postlist/post-menu/post-menu.component';
import { PostPoIdComponent } from './postlist/post-po-id/post-po-id.component';
import { UserProfilePoIdComponent } from './user-profile-po-id/user-profile-po-id.component';


@NgModule({
  declarations: [
    LoggedComponent,
    UserProfileComponent,
    PostProfileComponent,
    CommentsPostComponent,
    PostFormularzComponent,
    WyszukajPipe,
    AddLikeComponent,
    CommentFormularzComponent,
    PostMenuComponent,
    PostPoIdComponent,
    UserProfilePoIdComponent
  ],
  exports: [
    WyszukajPipe,
    AddLikeComponent,
    CommentsPostComponent,
    CommentFormularzComponent,
    PostMenuComponent
  ],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class LoggedModule { }
