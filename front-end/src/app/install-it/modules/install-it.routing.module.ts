import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {SelectPackagesComponent} from "../components/select-packages/select-packages.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'packages/os/:os',
    component: SelectPackagesComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class InstallItRoutingModule {}
