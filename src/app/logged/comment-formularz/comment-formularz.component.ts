import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {User} from "../../klasy/user.model";
import {Post} from "../../klasy/post.model";
import {Comment} from "../../klasy/comment.model";

@Component({
  selector: 'app-comment-formularz',
  templateUrl: './comment-formularz.component.html',
  styleUrl: './comment-formularz.component.scss'
})
export class CommentFormularzComponent {
  @Input() post: Post
  userCom: User;
  form: FormGroup;
  fieldBlurred: { [key: string]: boolean } = {};
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
    this.form = this.fb.group({
      content: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    })
    const userId = this.userService.session._id;
    const foundUser = this.userService.users.find(user => user.id === userId);
    this.userCom = foundUser;
  }
  onBlur(fieldName: string) {
    this.fieldBlurred[fieldName] = true;
  }
  get content(){
    return this.form.get('content');
  }
  dodajKomentarz() {
    if (this.form.valid) {
      this.post.comments.push(new Comment(this.userCom.nickname,this.form.value.content,false));
      this.form.reset();
      this.form.controls['content'].setErrors(null);
    } else {
      console.log("nie udalo sie");
    }
  }
}
