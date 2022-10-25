import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ScriptGeneratorService} from "../../services/script-generator.service";
// @ts-ignore
import { copy } from 'copy-to-clipboard';
import {SnackBarService} from "../../../shared/services/snack-bar.service";

@Component({
  selector: 'app-generate-script',
  templateUrl: './generate-script.component.html',
  styleUrls: ['./generate-script.component.scss']
})
export class GenerateScriptComponent implements OnInit {
  installScriptText = ''
  curlInstallCommand = ''

  constructor(
    private route: ActivatedRoute,
    private scriptGeneratorService: ScriptGeneratorService,
    private snackBarService: SnackBarService
  ) { }

  ngOnInit(): void {
    const osName = this.route.snapshot.paramMap.get('os') as string;
    const selectedPackages = this.route.snapshot.queryParams['packages'] as string[];
    this.generateScript(osName, selectedPackages)
  }

  generateScript(osName: string, selectedPackagesNames: string[]) {
    this.scriptGeneratorService.generateScript(osName, selectedPackagesNames).subscribe({
      next: (response) => {
        this.curlInstallCommand = response.curlInstallCommand;
        this.installScriptText = response.installScript
      },
      error: (error) => {
        this.snackBarService.showErrorMessage('Error generating script')
      }
    })
  }

  copyBashInstallScriptToClipboard() {
    copy(this.installScriptText)
  }

}
