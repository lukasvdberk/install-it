import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageContainerComponent} from "../components/page-container/page-container.component";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SnackBarService} from "../services/snack-bar.service";

@NgModule({
  declarations: [
    PageContainerComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    SnackBarService
  ],
  exports: [
    PageContainerComponent
  ]
})
export class SharedModule { }
