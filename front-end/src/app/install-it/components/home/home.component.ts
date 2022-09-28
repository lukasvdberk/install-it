import { Component, OnInit } from '@angular/core';
import {OperatingSystem} from "../../models/operating-system.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedOperatingSystem!: OperatingSystem;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  setSelectedOperatingSystem(newlySelectedOperatingSystem: OperatingSystem): void {
    this.selectedOperatingSystem = newlySelectedOperatingSystem;
  }
  goToSelectPackagesPage(): void {
    if(!this.selectedOperatingSystem) {
      // TODO show snackbar
    }
    this.router.navigate(['packages/os', this.selectedOperatingSystem.name]).then().catch(console.log)
  }
}
