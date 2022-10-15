import { Directionality } from '@angular/cdk/bidi';
import { Component, Input, OnInit,Inject } from '@angular/core';
import { MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Navigation, Router } from '@angular/router';
import { mergeMapTo } from 'rxjs';
import { DisciplinaCadastroComponent } from '../../disciplinas/disciplina-cadastro/disciplina-cadastro.component';


export interface DialogData {
  
  msg: string,
  icon: string
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {

  }

  limpar() {
   
  }

}
