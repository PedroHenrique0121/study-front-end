import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Assunto } from 'src/app/assuntos/Assunto';
import { DialogComponent, DialogData } from 'src/app/componentes/dialog/dialog.component';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Disciplina } from '../Disciplina';

export class D {

  disciplina!: {
    id: number
    descricao: string;
    userId: number,
    assuntos: Assunto[]
  }

}
@Component({
  selector: 'app-disciplina-edicao',
  templateUrl: './disciplina-edicao.component.html',
  styleUrls: ['./disciplina-edicao.component.css']
})


export class DisciplinaEdicaoComponent implements OnInit {


  formulario!: FormGroup;
  disciplina!: Disciplina;
  dialogConfig!: MatDialogConfig;

  constructor(private fb: FormBuilder,
    private disciplinaService: DisciplinaService,
    private dialog: MatDialog,
    private router: Router,
    private location: Location

  ) {
    this.verificaEdicao()
  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      id: new FormControl('',),
      descricao: new FormControl('', [Validators.required,]),
    });

    this.id?.disable();
  }

  get id() {
    return this.formulario.get("id");
  }
  get descricao() {
    return this.formulario.get("descricao");
  }

  verificaEdicao() {
    this.disciplina = new Disciplina();
    const state = this.location.getState() as D;
    if (state.disciplina != undefined) {
      this.disciplina = state.disciplina;
    } else {
      this.router.navigate(["/disciplinas/lista"])


      
    }
  }

  onSubmit() {

    if (this.formulario.invalid) {
      return;
    }

   
    this.disciplinaService.editar(this.disciplina)
      .subscribe(response => {

        this.dialog.open(DialogComponent, {
          disableClose: true,
          height: "200px",
          width: "400px",
          data: {
            msg: "Disciplina  editada com sucesso!",
            icon: "check_circle"
          }

        })

        this.formulario.reset()
        this.router.navigate(["/disciplinas/lista"])
      }, errorResponse => {

        this.dialog.open(DialogComponent, {
          disableClose: true,
          height: "300px",
          width: "400px",
          data: {
            msg: errorResponse.error.titulo ? errorResponse.error.titulo : "Não foi possivel editar essa disciplina!",
            icon: "gpp_bad"
          }

        })
      })
  }
  fechar() {
    this.router.navigate(["/disciplinas/lista"])
  }

}
