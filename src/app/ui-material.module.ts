import {NgModule} from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    MatToolbarModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
    ],
  exports: [
    MatToolbarModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule

  ]
})

export class MaterialModule { }
