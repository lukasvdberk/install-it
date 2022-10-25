import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OperatingSystemService} from "../../services/operating-system.service";
import {OperatingSystem} from "../../models/operating-system.model";
import {SnackBarService} from "../../../shared/services/snack-bar.service";

@Component({
  selector: 'app-os-selector',
  templateUrl: './os-selector.component.html',
  styleUrls: ['./os-selector.component.scss']
})
export class OsSelectorComponent implements OnInit {
  selectedOperatingSystem!: OperatingSystem;

  @Output()
  onOperatingSelected: EventEmitter<OperatingSystem> = new EventEmitter<OperatingSystem>();

  operatingSystems: OperatingSystem[] = []
  constructor(
    private operatingSystemService: OperatingSystemService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.getOperatingSystems()
  }

  getOperatingSystems(): void {
    this.operatingSystemService.getOperatingSystems().subscribe({
      next: (operatingSystems) => {
        this.operatingSystems = operatingSystems;
      },
      error: (error) => {
        this.snackBarService.showErrorMessage('Something went wrong while fetching operating systems')
      }
    })
  }

  setOperatingSystem(operatingSystem: OperatingSystem): void {
    this.selectedOperatingSystem = operatingSystem;
    this.onOperatingSelected.emit(this.selectedOperatingSystem)
  }

}
