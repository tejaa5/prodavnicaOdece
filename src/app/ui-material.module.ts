import {NgModule} from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    MatToolbarModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatCardModule
    ],
  exports: [
    MatToolbarModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatCardModule

  ]
})

export class MaterialModule { }
