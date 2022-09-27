import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OsSelectorComponent} from "../components/os-selector/os-selector.component";
import {InstallItRoutingModule} from "./install-it.routing.module";
import {HomeComponent} from "../components/home/home.component";
import {SharedModule} from "../../shared/modules/shared.module";



@NgModule({
  declarations: [
    HomeComponent,
    OsSelectorComponent
  ],
  imports: [
    CommonModule,
    InstallItRoutingModule,
    SharedModule
  ],
  exports: [
    InstallItRoutingModule
  ]
})
export class InstallItModule { }
