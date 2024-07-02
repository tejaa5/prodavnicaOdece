import { Component } from '@angular/core';
import {UserService} from "./auth/user.service";
import {MatDialog} from "@angular/material/dialog";
import {ProfilComponent} from "./auth/profil/profil.component";


@Component({
  selector: 'app-root',


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prodavnicaOdece';

  profileOpened: boolean = false;

  constructor (public userService: UserService, public dialog: MatDialog) {}

  openProfile(korisnikId: number) {
    this.profileOpened = true;
    const profileDialog = this.dialog.open(ProfilComponent, {
      disableClose: true,
      width: '50vw',
      data: {korisnik: this.userService.getUserById(korisnikId)}
    });

    profileDialog.afterClosed().subscribe((r) => {
      this.profileOpened = false;
    })

  }
}
