import { Injectable } from "@angular/core";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Injectable()
export class SnackBarService {
  MESSAGE_DURATION = 1000000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center'
  verticalPosition: MatSnackBarVerticalPosition = 'top'

  constructor(
    private readonly snackBar: MatSnackBar
  ) { }

  /**
   * Shows an error message in the snackbar
   * @param message
   */
  showErrorMessage(message: string) {
    // show a angular material error snackbar
    this.snackBar.open(message, 'Close', {
      panelClass: ['error-message'],
      duration: this.MESSAGE_DURATION,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  /**
   * Shows a success message in the snackbar
   * @param message
   */
  showSuccessMessage(message: string) {
    this.snackBar.open(message, 'Close', {
      panelClass: ['success-message'],
      duration: this.MESSAGE_DURATION,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
