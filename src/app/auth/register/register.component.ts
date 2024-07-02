import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  errorExists = false;
  errorText = "";

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(form: NgForm) {
    if (!this.userService.getUser(form.value.email)) {

      this.errorExists = false;
      var newUser = this.userService.registerUser(form.value.email,
        form.value.password,
        form.value.username,
        form.value.ime,
        form.value.prezime,
        );
      this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "Korisnik sa ovom e-mail adresom vec postoji."
    }
  }

  }


