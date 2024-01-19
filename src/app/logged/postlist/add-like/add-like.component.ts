import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../../../klasy/post.model";

@Component({
  selector: 'app-add-like',
  templateUrl: './add-like.component.html',
  styleUrl: './add-like.component.scss'
})
export class AddLikeComponent {
  @Input() czyWyswielic: boolean;
  @Output() dodajLikePost: EventEmitter<void> = new EventEmitter();
  dodajLike() {
    this.dodajLikePost.emit()
  }
}
