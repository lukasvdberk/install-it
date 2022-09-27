import { Component, OnInit } from '@angular/core';
import {OperatingSystemService} from "../../services/operating-system.service";
import {OperatingSystem} from "../../models/operating-system.model";

@Component({
  selector: 'app-os-selector',
  templateUrl: './os-selector.component.html',
  styleUrls: ['./os-selector.component.scss']
})
export class OsSelectorComponent implements OnInit {
  selectedOperatingSystem!: OperatingSystem;

  operatingSystems: OperatingSystem[] = []
  constructor(
    private operatingSystemService: OperatingSystemService
  ) { }

  ngOnInit(): void {
    this.getOperatingSystems()
  }

  getOperatingSystems(): void {
    this.operatingSystemService.getOperatingSystems().subscribe({
      next: (operatingSystems) => {
        console.log(operatingSystems)
        this.operatingSystems = operatingSystems;
      },
      error: (error) => {
        console.log(error)
        // TODO redirect to error page
      }
    })
  }

  setOperatingSystem(operatingSystem: OperatingSystem): void {
    this.selectedOperatingSystem = operatingSystem;
  }

}
