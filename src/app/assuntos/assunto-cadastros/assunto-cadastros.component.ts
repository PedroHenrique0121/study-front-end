import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { AssuntoService } from 'src/app/services/assunto.service';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Disciplina, DisciplinaPage } from '../../disciplinas/Disciplina';
import { Assunto } from '../Assunto';
@Component({
  selector: 'app-assunto-cadastros',
  templateUrl: './assunto-cadastros.component.html',
  styleUrls: ['./assunto-cadastros.component.css']
})
export class AssuntoCadastrosComponent implements OnInit {

  formulario!: FormGroup;
  assunto!: Assunto;

  dialogConfig!: MatDialogConfig;
  disciplina!: Disciplina;
  disciplinas!: Disciplina[];
  disciplinaPage!: DisciplinaPage;
  descricaoDisciplinaPesquisa!: string


  constructor(private fb: FormBuilder,
    private assuntoService: AssuntoService,
    private dialog: MatDialog,
    private router: Router,
    private disciplinaService: DisciplinaService
  ) {
    this.assunto = new Assunto();
    this.disciplina = new Disciplina();
  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      descricao: new FormControl('', [Validators.required,]),
      disciplinaId: new FormControl('', [Validators.required]),
      descricaoDisciplina: new FormControl('', [])

    });


  }

  get descricao() {
    return this.formulario.get("descricao");
  }
  get disciplinaId() {
    return this.formulario.get("disciplinaId");
  }

  // get descricaoD() {
  //   return this.formulario.get("descricaoDisciplina");
  // }

  onSubmit() {

    if (this.disciplinaId?.hasError('required')) {
      this.dialog.open(DialogComponent, {
        disableClose: true,
        height: "200px",
        width: "400px",
        data: {
          msg: "Enescessario escolher uma disciplina!",
          icon: "gpp_bad"
        }

      })
    }
    if (this.formulario.invalid) {
      return;
    } else {
      this.assuntoService.salvar(this.assunto).
        subscribe(response => {
          this.dialog.open(DialogComponent, {
            disableClose: true,
            height: "200px",
            width: "400px",
            data: {
              msg: "Assunto cadastrado com sucesso!",
              icon: "check_circle"
            }
          })

          this.formulario.reset()

        }, errorResponse => {
          console.log(errorResponse)
          this.dialog.open(DialogComponent, {
            disableClose: true,
            height: "200px",
            width: "400px",
            data: {
              msg: errorResponse.error.titulo ? errorResponse.error.titulo : "Não foi possivel realizar o cadastro",
              icon: "gpp_bad"
            }

          })
        })
    }
  }

  listar() {
    this.router.navigate(["/assuntos/lista"])
  }

  buscarPorTodasDisciplinas() {
    this.disciplinaService.retornarTodasSemPaginacao()
      .subscribe(response => {
        this.disciplinas = response
      }, errorResponse => { })
  }

  setarIdDisciplinaEscolhida(disciplina: Disciplina) {
    this.assunto.disciplinaId = disciplina.id;
    this.disciplina = disciplina;

    if (disciplina.descricao.length > 40) {
      this.disciplina.descricao = disciplina.descricao
      this.disciplina.descricao = this.disciplina.descricao.substring(0, 40)
      this.disciplina.descricao = this.disciplina.descricao.concat("...")
    } else {
      this.disciplina.descricao = disciplina.descricao
    }
    this.disciplinaId?.setValue(disciplina.id)
  }

  buscarPorDescricao() {
    this.disciplinaService.retornarPorDescricaoSemPaginacao(this.descricaoDisciplinaPesquisa)
      .subscribe(response => {
        this.disciplinas = response;
      }, errorResponse => { })
  }
}