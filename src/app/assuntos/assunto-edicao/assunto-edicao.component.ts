import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Assunto } from '../Assunto';
import { Location } from '@angular/common';
import { Disciplina } from 'src/app/disciplinas/Disciplina';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { AssuntoService } from 'src/app/services/assunto.service';

export type A = {

  assunto: Assunto
}
@Component({
  selector: 'app-assunto-edicao',
  templateUrl: './assunto-edicao.component.html',
  styleUrls: ['./assunto-edicao.component.css']
})
export class AssuntoEdicaoComponent implements OnInit {


  formulario!: FormGroup;
  assunto!: Assunto;
  dialogConfig!: MatDialogConfig;
  disciplina!: Disciplina;
  disciplinas!: Disciplina[]
  descricaoDisciplinaPesquisa!: string;
  descricaoDisciplinaEscolhida!: string;
  constructor(
    private assuntoService: AssuntoService,
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
      descricaoDisciplina: new FormControl('',),
      disciplinaId: new FormControl('',)
    });

    this.id?.disable();
    // this.getDescricaoDisciplina?.disable()
    this.descricaoDisciplinaEscolhida = this.assunto.disciplina.descricao
  }

  get id() {
    return this.formulario.get("id");
  }
  get descricao() {
    return this.formulario.get("descricao");
  }

  get getDescricaoDisciplina() {
    return this.formulario.get("descricaoDisciplina");
  }

  get disciplinaId() {
    return this.formulario.get("disciplinaId");
  }

  verificaEdicao() {

    this.assunto = new Assunto();
    const state = this.location.getState() as A;
    if (state.assunto != undefined) {
      this.assunto = state.assunto;
    } else {
      this.router.navigate(["/assuntos/lista"])

    }
  }
  onSubmit() {

    if (this.formulario.invalid) {
      return;
    }

    console.log(this.assunto)
    this.assuntoService.editar(this.assunto)
      .subscribe(response => {

        this.dialog.open(DialogComponent, {
          disableClose: true,
          height: "200px",
          width: "400px",
          data: {
            msg: "Assunto editado com sucesso!",
            icon: "check_circle"
          }

        })
        this.formulario.reset()
        this.router.navigate(["/assuntos/lista"])
      }, errorResponse => {

        this.dialog.open(DialogComponent, {
          disableClose: true,
          height: "350px",
          width: "400px",
          data: {
            msg: errorResponse.error.titulo ? errorResponse.error.titulo : "Não foi possivel editar esse assunto!",
            icon: "gpp_bad"
          }

        })
      })
  }

  buscarPorDescricao() {

    this.disciplinaService.retornarPorDescricaoSemPaginacao(this.descricaoDisciplinaPesquisa)
      .subscribe(response => {
        this.disciplinas = response;

      }, errorResponse => {

      })
  }

  setarIdDisciplinaEscolhida(id: number, descricao: string) {
    this.assunto.disciplinaId = id

    if (descricao.length > 40) {
      this.descricaoDisciplinaEscolhida = descricao
      this.descricaoDisciplinaEscolhida = this.descricaoDisciplinaEscolhida.substring(0, 40)
      this.descricaoDisciplinaEscolhida = this.descricaoDisciplinaEscolhida.concat("...")
    } else {
      this.descricaoDisciplinaEscolhida = descricao
    }
    this.disciplinaId?.setValue(id);
    this.assunto.disciplinaId = id;
    this.assunto.disciplina.descricao = descricao;
    this.assunto.disciplina.id = id;
  }

  cancelar() {
    this.router.navigate(["/assuntos/lista"])
  }


}
