import {Post} from "./post.model";

export class User{
  constructor(private _id:number,
              private _email: String,
              private _nickname: String,
              private _password: String,
              private _name: String,
              private _surname: String,
              private _liczbaObserwujacych: String[],
              private _osobyKtoreObserwuje: String[],
              private _posty: Post[]
  ) {
  }

  createPost(title: String, content: String,PostId?: number): void{
    if(PostId == null){
      console.log('Brak id przy kreacji posta z metody uzytkownika ./user.model.ts , automatycznie przydzielone id to 9');
      PostId = 9;
    }
    let post = new Post(PostId,2,title,content,false,null,null,null);
    this._posty.push(post);
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): String {
    return this._email;
  }

  set email(value: String) {
    this._email = value;
  }

  get nickname(): String {
    return this._nickname;
  }

  set nickname(value: String) {
    this._nickname = value;
  }

  get password(): String {
    return this._password;
  }

  set password(value: String) {
    this._password = value;
  }

  get name(): String {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }

  get surname(): String {
    return this._surname;
  }

  set surname(value: String) {
    this._surname = value;
  }

  get posty(): Post[] {
    return this._posty;
  }


  get liczbaObserwujacych(): String[] {
    return this._liczbaObserwujacych;
  }

  set liczbaObserwujacych(value: String[]) {
    this._liczbaObserwujacych = value;
  }

  set posty(value: Post[]) {
    this._posty = value;
  }

  get osobyKtoreObserwuje(): String[] {
    return this._osobyKtoreObserwuje;
  }

  set osobyKtoreObserwuje(value: String[]) {
    this._osobyKtoreObserwuje = value;
  }
}
