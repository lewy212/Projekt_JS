import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { UserListElementComponent } from './admin/user-list/user-list-element/user-list-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { HomeComponent } from './home/home.component';
import { UserFormularzComponent } from './user-formularz/user-formularz.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogContent} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import { LoginComponent } from './login/login.component';
import {AdminModule} from "./admin/admin.module";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PostListComponent } from './logged/postlist/postlist.component';
import { PasswordSpecialValidatorDirective } from './user-formularz/password-special-validator.directive';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {LoggedModule} from "./logged/logged.module";
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListElementComponent,
    HomeComponent,
    UserFormularzComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PostListComponent,
    PasswordSpecialValidatorDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatDialogContent,
        MatInputModule,
        AdminModule,
        HttpClientModule,
        FormsModule,
        LoggedModule,
      MatIconModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
