import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OsSelectorComponent} from "../components/os-selector/os-selector.component";
import {InstallItRoutingModule} from "./install-it.routing.module";
import {HomeComponent} from "../components/home/home.component";
import {SharedModule} from "../../shared/modules/shared.module";
import {OperatingSystemService} from "../services/operating-system.service";
import {SelectPackagesComponent} from "../components/select-packages/select-packages.component";
import {PackageComponent} from "../components/package/package.component";



@NgModule({
  declarations: [
    HomeComponent,
    OsSelectorComponent,
    SelectPackagesComponent,
    PackageComponent
  ],
  providers: [
    OperatingSystemService
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
