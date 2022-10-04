import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home.component";
import {SelectPackagesComponent} from "../components/select-packages/select-packages.component";
import {GenerateScriptComponent} from "../components/generate-script/generate-script.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'packages/os/:os',
    component: SelectPackagesComponent
  },
  {
    path: 'installer/generate/:os', // also pass packages in query params like ?packages=package1,packages=package1
    component: GenerateScriptComponent
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
