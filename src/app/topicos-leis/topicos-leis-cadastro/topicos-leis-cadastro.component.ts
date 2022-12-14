import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';

import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { AssuntoService } from 'src/app/services/assunto.service';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Disciplina, DisciplinaPage } from '../../disciplinas/Disciplina';
import { Assunto } from '../../assuntos/Assunto';
import { TopicoLeiServiceService } from 'src/app/services/topico-lei-service.service';
import { TopicoLei } from '../TopicoLei';
@Component({
  selector: 'app-topicos-leis-cadastro',
  templateUrl: './topicos-leis-cadastro.component.html',
  styleUrls: ['./topicos-leis-cadastro.component.css']
})
export class TopicosLeisCadastroComponent implements OnInit {

  formulario!: FormGroup;
  topicoLei!: TopicoLei;
  dialogConfig!: MatDialogConfig;
  assuntos: Assunto[] = [];


  disciplinaPage!: DisciplinaPage;
  descricaoAssuntoPesquisa!: string
  disciplinas!: Disciplina[];
  descricaoAssunto!: string;

  constructor(private fb: FormBuilder,
    private assuntoService: AssuntoService,
    private dialog: MatDialog,
    private router: Router,
    private topicoLieiSercvice: TopicoLeiServiceService,

  ) {
    this.topicoLei = new TopicoLei();
  this.buscarPorDescricao()
  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      descricao: new FormControl('', [Validators.required,]),
      assuntoId: new FormControl('', [Validators.required]),
      descricaoAssunto: new FormControl('', [])

    });


  }

  get descricao() {
    return this.formulario.get("descricao");
  }
  get assuntoId() {
    return this.formulario.get("assuntoId");
  }

  // get descricaoD() {
  //   return this.formulario.get("descricaoAssunto");
  // }

  onSubmit() {

    if (this.assuntoId?.hasError('required')) {
      this.dialog.open(DialogComponent, {
        disableClose: true,
        height: "200px",
        width: "400px",
        data: {
          msg: "Enescessario escolher um assunto!",
          icon: "gpp_bad"
        }

      })
    }
    if (this.formulario.invalid) {
      return;
    } else {

      console.log(this.topicoLei)
      this.topicoLieiSercvice.salvar(this.topicoLei).
        subscribe(response => {
          this.dialog.open(DialogComponent, {
            disableClose: true,
            height: "200px",
            width: "400px",
            data: {
              msg: "Topico/Lei cadastrado com sucesso!",
              icon: "check_circle"
            }
          })

          this.formulario.reset()
          this.descricaoAssunto = ""
        }, errorResponse => {
          console.log(errorResponse)
          this.dialog.open(DialogComponent, {
            disableClose: true,
            height: "200px",
            width: "400px",
            data: {
              msg: errorResponse.error.titulo ? errorResponse.error.titulo : "N??o foi possivel realizar o cadastro",
              icon: "gpp_bad"
            }

          })
        })

    }
  }

  listar() {
    this.router.navigate(["/topicos-leis/lista"])
  }

  buscarPorTodosassuntos() {
    this.assuntoService.retornarTodosSempaginacao()
      .subscribe(response => {

        this.assuntos = response

      }, errorResponse => {

      })

  }

  setarAssuntoEscolhido(id: number, descricao: string) {

    console.log(id, descricao )
    if (descricao.length > 40) {
      this.descricaoAssunto = descricao
      this.descricaoAssunto = this.descricaoAssunto.substring(0, 40)
      this.descricaoAssunto = this.descricaoAssunto.concat("...")
    } else {
      this.descricaoAssunto = descricao
    }

    console.log(id, descricao)
    this.assuntoId?.setValue(id)
    let assunto = new Assunto();
    assunto.id = id
    this.topicoLei.assunto = assunto
    this.topicoLei.assuntoId = id
  }

  buscarPorDescricao() {

    this.assuntoService.retornarTodosSempaginacao()
      .subscribe((response) => {
        this.assuntos = response;

      }, errorResponse => {
        console.log(errorResponse)
      })
  }
}
