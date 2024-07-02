import {Component, Inject, OnInit} from '@angular/core';
import {Korisnik, UserService} from "../user.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {
  isEditing: boolean = false;
  profileForInput!: Korisnik;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) { }


  ngOnInit(): void {
    this.profileForInput = {
      id: this.data.korisnik.id,
      email: this.data.korisnik.email,
      ime: this.data.korisnik.ime,
      prezime: this.data.korisnik.prezime,
      username: this.data.korisnik.username,
      password: this.data.korisnik.password,
      adresa: this.data.korisnik.adresa,
      broj: this.data.korisnik.broj
    }
  }

  enableEdit() {
    this.isEditing = !this.isEditing;
    console.log('click');
  }

  finishEditing() {
    this.data.korisnik.ime=this.profileForInput.ime;
    this.data.korisnik.prezime=this.profileForInput.prezime;
    this.data.korisnik.username=this.profileForInput.username;
    this.data.korisnik.email = this.profileForInput.email;
    this.data.korisnik.password = this.profileForInput.password;
    this.data.korisnik.adresa = this.profileForInput.adresa;
    this.data.korisnik.broj=this.profileForInput.broj;
    console.log(this.data.korisnik);
    console.log(UserService.dummyUserList);
    this.isEditing = false;
  }

}
