import {Component, Input, OnInit} from '@angular/core';
import {Package} from "../../models/package.model";

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  @Input()
  package!: Package;

  constructor() { }

  ngOnInit(): void {
  }

}
