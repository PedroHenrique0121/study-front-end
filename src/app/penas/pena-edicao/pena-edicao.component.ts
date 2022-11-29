import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Artigo } from 'src/app/artigos/Artigo';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { PenasService } from 'src/app/services/penas.service';
import { Pena } from '../Pena';

@Component({
  selector: 'app-pena-edicao',
  templateUrl: './pena-edicao.component.html',
  styleUrls: ['./pena-edicao.component.css']
})
export class PenaEdicaoComponent implements OnInit {

  

  ngOnInit(): void {

  }

  

}
