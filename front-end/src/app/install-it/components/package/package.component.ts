import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Package} from "../../models/package.model";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent {
  isSelected: boolean = false;

  @Input()
  package!: Package;

  @Output()
  onPackageSelect: EventEmitter<Package> = new EventEmitter<Package>();

  @Output()
  onDeselectedPackageSelect: EventEmitter<Package> = new EventEmitter<Package>();

  /**
   * On package selection call even emitters
   */
  onPackageSelected() {
    console.log(this.isSelected)
    this.isSelected = !this.isSelected;

    if(this.isSelected) {
      this.onPackageSelect.emit(this.package);
    } else {
      this.onDeselectedPackageSelect.emit(this.package);
    }
  }
}
