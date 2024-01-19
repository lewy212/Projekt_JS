import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from "./admin/user-list/user-list.component";
import { HomeComponent } from "./home/home.component";
import { PostListComponent } from "./logged/postlist/postlist.component";
import { AboutComponent } from "./about/about.component";
import { UserFormularzComponent } from "./user-formularz/user-formularz.component";
import { LoginComponent } from "./login/login.component";
import { authGuard } from "./auth.guard";
import {authUserGuard} from "./auth-user.guard";

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [authGuard]
  },
  {
    path: 'logged', loadChildren: () =>
      import('./logged/logged.module').then((m) => m.LoggedModule),
    canActivate: [authUserGuard]
  },
  { path: 'login', component: LoginComponent },

  { path: 'user-formularz', component: UserFormularzComponent },
  { path: 'home', component: HomeComponent },

  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
