import {User} from "./user.model";
import {Comment} from "./comment.model";

export class Post{

  constructor(private _id:number,
              private _idUsera:number,
              private _title: String,
              private _content: String,
              private _wasEdited: Boolean,
              private _liczbaLikow: String[],
              private _previousEditions: Post[],
              private _comments: Comment[],
              ) {
  }


  set liczbaLikow(value: String[]) {
    this._liczbaLikow = value;
  }

  set content(content:String){
    this._content = content;
 }

  set title(title:String){
    this._title = title;
  }

  set wasEdited(edition:Boolean){
    this._wasEdited = edition;
  }

  get id(): number {
    return this._id;
  }

  get title(): String {
    return this._title;
  }

  get content(): String {
    return this._content;
  }

  get wasEdited(): Boolean {
    return this._wasEdited;
  }

  get liczbaLikow(): String[] {
    return this._liczbaLikow;
  }

  get previousEditions(): Post[] {
    return this._previousEditions;
  }

  get comments(): Comment[] {
    return this._comments;
  }

  get idUsera(): number {
    return this._idUsera;
  }

  set idUsera(value: number) {
    this._idUsera = value;
  }
}
