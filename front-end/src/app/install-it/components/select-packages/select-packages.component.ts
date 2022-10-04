import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OperatingSystemService} from "../../services/operating-system.service";
import * as os from "os";
import {Observable} from "rxjs";
import {OperatingSystem} from "../../models/operating-system.model";
import {PackagesService} from "../../services/packages.service";
import {Package} from "../../models/package.model";

@Component({
  selector: 'app-select-packages',
  templateUrl: './select-packages.component.html',
  styleUrls: ['./select-packages.component.scss']
})
export class SelectPackagesComponent implements OnInit {
  packagesYouCanInstall: Package[] = [];
  filteredPackages: Package[] = [];

  selectedPackages: Package[] = [];

  constructor(
    private operatingSystemService: OperatingSystemService,
    private packagesService: PackagesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const osName = this.route.snapshot.paramMap.get('os') as string;


    this.getOperatingSystemByName(osName).subscribe({
      next: (operatingSystem) => {
        this.packagesService.getPackages(operatingSystem).subscribe({
          next: (packages) => {
            // packages you can install for this OS
            this.packagesYouCanInstall = packages;
            this.filteredPackages = [...this.packagesYouCanInstall]
          },
          error: (error) => {
            // TODO handle error
            console.error(error)
          }
        })
      },
      error: (error: any) => {
        // TODO handle error
        console.error(error)
      }
    })
  }

  /**
   * Filters packages you can install
   * @param searchTerm
   */
  searchPackage(event: any) {
    const searchTerm = (event.target.value).toLowerCase();

    // search lower case for the name of the package
    this.filteredPackages = this.packagesYouCanInstall.filter((p) => p.name.toLowerCase().includes(searchTerm))
  }

  getOperatingSystemByName(name: string): Observable<OperatingSystem> {
    return this.operatingSystemService.getOperatingSystemByName(name)
  }

  selectedPackage(selectedPackage: Package) {
    this.selectedPackages.push(selectedPackage)
  }

  deselectedPackage(deselectedPackage: Package) {
    const indexOfSelectedPackage = this.selectedPackages.findIndex((p) => p.id === deselectedPackage.id);
    this.selectedPackages.splice(indexOfSelectedPackage, 1)
  }

  /**
   * Returns true if package is selected
   * @param packageToCheck
   */
  isSelectedPackage(packageToCheck: Package) {
    return this.selectedPackages.some((p) => p.id === packageToCheck.id)
  }
}
