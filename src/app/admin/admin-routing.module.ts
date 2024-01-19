import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {UserListComponent} from "./user-list/user-list.component";
import {authGuard} from "../auth.guard";
import {UserFormularzComponent} from "../user-formularz/user-formularz.component";

const routes: Routes = [
  { path: '',component: AdminComponent,children:[
    { path: '', redirectTo: 'allUsers', pathMatch: 'full' },
      { path: 'allUsers/:id/edit', component: UserFormularzComponent},
    {path: 'allUsers',component: UserListComponent,canActivate: [authGuard]}] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
