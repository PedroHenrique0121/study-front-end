import { Component } from '@angular/core';

import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './componentes/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

  constructor(private dialog: MatDialog) { }


  toogleSide() {

   
  }
  
}
