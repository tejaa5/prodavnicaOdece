import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  errorExists = false;
  errorText = "";

  constructor (private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm){
    var email = form.value.email;
    var password = form.value.password;

    var korisnik = this.userService.getUser(email);

    if (!korisnik) {
      this.errorExists = true;
      this.errorText = "Korisnik sa e-mailom " + email + " ne postoji";
      return;
    }

    var isPasswordValid = this.userService.isPasswordCorrect(email, password);

    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = "Uneta lozinka nije ispravna"
      return
    }
    this.errorExists = false;
    this.router.navigate(['']);
  }

}
