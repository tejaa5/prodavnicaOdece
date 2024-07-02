import {AppComponent} from "./app.component";

import {BrowserModule} from "@angular/platform-browser";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MaterialModule} from "./ui-material.module";
import {MatIconModule} from '@angular/material/icon';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { KorpaComponent } from './korpa/korpa.component';
import {UserService} from "./auth/user.service";
import { ProfilComponent } from './auth/profil/profil.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    KorpaComponent,
    ProfilComponent


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    MatIconModule,
    FormsModule


  ],
  providers: [
    provideAnimationsAsync(),
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
