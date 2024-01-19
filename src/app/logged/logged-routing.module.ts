import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PublicComponent} from "../public/public.component";
import {LandingComponent} from "../public/landing/landing.component";
import {LoggedComponent} from "./logged.component";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {authUserGuard} from "../auth-user.guard";
import {PostProfileComponent} from "./user-profile/post-profile/post-profile.component";
import {PostFormularzComponent} from "./user-profile/post-formularz/post-formularz.component";
import {PostListComponent} from "./postlist/postlist.component";
import {UserFormularzComponent} from "../user-formularz/user-formularz.component";
import {UserProfilePoIdComponent} from "./user-profile-po-id/user-profile-po-id.component";

const routes: Routes = [{path: '',component: LoggedComponent,children:[
    { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
    //{path:'',component: LoggedComponent},
    { path: 'postlist', component: PostListComponent },
    { path: 'postlist/:obserwujacy', component: PostListComponent },
    {path:'user-profile',component: UserProfileComponent,canActivate: [authUserGuard]},
    {path:'user-profile/add-post',component: PostFormularzComponent},
    { path: 'user-profile/:id',component: UserProfilePoIdComponent,canActivate: [authUserGuard]}

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
