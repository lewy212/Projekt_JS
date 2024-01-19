import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../klasy/user.model";
import {Post} from "../../klasy/post.model";

@Component({
  selector: 'app-user-profile-po-id',
  templateUrl: './user-profile-po-id.component.html',
  styleUrl: './user-profile-po-id.component.scss'
})
export class UserProfilePoIdComponent {
  searchText: string = "";
  user: User;
  postList: Post[] = [];
  id_profilu_usera: number;
  id_wyswietlajacego_profil:number;
  menu: any;
  czyWyswietlic=true;
  czyPierwszyRaz =true;
  selectedPost: Post = null;

  constructor( private userService: UserService, private router: Router,route: ActivatedRoute) {


      this.id_profilu_usera = +route.snapshot.params['id'];
      this.user = this.userService.users.find(user => user.id === this.id_profilu_usera);
      this.id_wyswietlajacego_profil = this.userService.session._id;
      console.log(this.id_profilu_usera);
      console.log(this.user);
      this.przypiszPost();
      console.log(this.postList);
      this.dodajFollow();
  }
  przypiszPost()
  {
    this.user.posty.forEach((post)=>
    {
      this.postList.push(post);
    })
  }
  onSelect(post: Post): void{
    this.selectedPost = post;
  }
  likedPost(idPostu: number): boolean{
    let czyWyswietlic = true;

    if(this.postList[idPostu-1] && this.postList[idPostu-1].liczbaLikow !== null)
    {
      this.postList[idPostu-1].liczbaLikow.forEach(like=>
      {
        if(like ===this.userService.session._id)
        {
          czyWyswietlic = false;
        }
      })
    }
    return czyWyswietlic;
  }
  addLike() {
    if (!this.selectedPost.liczbaLikow) {
      this.selectedPost.liczbaLikow = []; // Inicjalizacja, jeśli null
    }
    let czyDodac = true;
    let idLike;
    this.selectedPost.liczbaLikow.forEach((like, index)=>
    {
      if(like ===this.userService.session._id)
      {
        czyDodac = false;
        idLike = index;
      }
    })
    if(czyDodac)
    {
      this.selectedPost.liczbaLikow.push(this.userService.session._id);
    }
    else {
      this.selectedPost.liczbaLikow.splice(idLike, 1);
    }
  }
  dodajFollow()
  {
    console.log(this.czyWyswietlic);
    let userDodajacy = this.userService.users.find(user => user.id === this.id_wyswietlajacego_profil);
    if(!userDodajacy.osobyKtoreObserwuje)
    {
      userDodajacy.osobyKtoreObserwuje = [];
    }
    if(!this.user.liczbaObserwujacych)
    {
      this.user.liczbaObserwujacych=[];
    }
    let czyDodac = true;
    let idObserwatora;
    this.user.liczbaObserwujacych.forEach((obserwujacy,index)=>
    {
      if(obserwujacy ===this.userService.session._id)
      {
        console.log("WTF");
        czyDodac=false;
        this.czyWyswietlic=false;
        idObserwatora = index;
      }
    })
    if(czyDodac)
    {
      if(!this.czyPierwszyRaz)
      {
        this.user.liczbaObserwujacych.push(this.userService.session._id);
        userDodajacy.osobyKtoreObserwuje.push(this.id_profilu_usera.toString());
        this.czyWyswietlic=false;
      }

    }
    else {
      if(!this.czyPierwszyRaz)
      {
        this.user.liczbaObserwujacych.splice(idObserwatora,1);
        userDodajacy.osobyKtoreObserwuje = userDodajacy.osobyKtoreObserwuje.filter((osoba) => osoba !== this.id_profilu_usera.toString());
        this.czyWyswietlic=true;
      }

    }
    this.czyPierwszyRaz=false;
    console.log(this.czyPierwszyRaz);
    console.log(this.czyWyswietlic);
  }

}
