import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import { CurrentSessionService } from '../services/current-session';

@Component({
  selector: 'app-user-formularz',
  templateUrl: './user-formularz.component.html',
  styleUrl: './user-formularz.component.scss'
})
export class UserFormularzComponent {
  form: FormGroup;
  id_edycji: number;
  fieldBlurred: { [key: string]: boolean } = {};
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,route: ActivatedRoute) {
    //const specialCharacters = ['.', ',', ';', '?', '!', '<', '>', '{', '}', '+', '*', '#', '$', '%','@'];
    this.id_edycji = +route.snapshot.params['id'];
    let uzytkownik;
    let email='',nickname='',password='',name='',surname='';
    if(!isNaN(this.id_edycji)){
      uzytkownik = this.userService.findUserById(this.id_edycji);
      email=uzytkownik.email;
      nickname=uzytkownik.nickname;
      password = uzytkownik.password;
      name = uzytkownik.name;
      surname = uzytkownik.surname;

    }
    //const specialCharacterPattern = specialCharacters.map(char => `.*\\${char}.*`).join('|');
    this.form = this.fb.group({
      email: [email, [Validators.required, Validators.email]],
      nickname: [nickname, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: [password, [Validators.required,Validators.minLength(4)]],
      name: [name, [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Z]/),]],
      surname: [surname, [Validators.required, Validators.minLength(2), Validators.pattern(/^[A-Z]/),]]
    })

  }
  onBlur(fieldName: string) {
    this.fieldBlurred[fieldName] = true;
  }
  get email() {
    return this.form.get('email')
  }

  get nickname() {
    return this.form.get('nickname')
  }

  get password() {
    return this.form.get('password')
  }

  get name() {
    return this.form.get('name')
  }

  get surname() {
    return this.form.get('surname')
  }

  register() {
    if (this.form.valid) {
      if(isNaN(this.id_edycji))
      {
        console.log("dodałem uzytkownika: ",this.form.value)
        this.userService.addUserHttp(this.form.value.email,this.form.value.nickname,this.form.value.password,this.form.value.name,this.form.value.surname);
      }
      else
      {
      this.userService.editUserHttp(this.id_edycji,this.form.value.email,this.form.value.nickname,this.form.value.password,this.form.value.name,this.form.value.surname);
      }
      this.router.navigate([`/admin/allUsers`]);
    } else {
      console.log("nie udalo sie");
    }
  }
}
