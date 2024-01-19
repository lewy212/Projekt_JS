import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../../klasy/user.model";
import {Post} from "../../../klasy/post.model";

@Component({
  selector: 'app-post-formularz',
  templateUrl: './post-formularz.component.html',
  styleUrl: './post-formularz.component.scss'
})
export class PostFormularzComponent {

  userPost: User;
  form: FormGroup;
  fieldBlurred: { [key: string]: boolean } = {};
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      content: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    })
    const userId = this.userService.session._id;
    const foundUser = this.userService.users.find(user => user.id === userId);
    this.userPost = foundUser;
  }
  onBlur(fieldName: string) {
    this.fieldBlurred[fieldName] = true;
  }
  get title(){
    return this.form.get('title');
  }
  get content(){
    return this.form.get('content');
  }

  dodajPost(){
    if (this.form.valid) {
      console.log("dodałem post: ",this.form.value)
      let ustawId =1;
      const userList = this.userService.users;
      userList.forEach((user) => {
        if(user.posty!=null){
          user.posty.forEach((post) => {
            ustawId=ustawId+1;
          });
        }
      });
      this.userService.addPost(this.userPost,new Post(ustawId,this.userService.session._id,this.form.value.title,this.form.value.content,false,null,null,null))
      this.router.navigate([`/logged/user-profile`]);
    } else {
      console.log("nie udalo sie");
    }
  }
}
