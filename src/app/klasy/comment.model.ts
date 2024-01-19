import {User} from "./user.model";

export class Comment{
  constructor(private _nickname: String,
              private _content: String,
              private _wasEdited: Boolean) {
  }

  get nickname(): String {
    return this._nickname;
  }

  get content(): String {
    return this._content;
  }

  get wasEdited(): Boolean {
    return this._wasEdited;
  }
}
