import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Assunto } from '../../assuntos/Assunto';
import { Location } from '@angular/common';
import { Disciplina } from 'src/app/disciplinas/Disciplina';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { AssuntoService } from 'src/app/services/assunto.service';
import { TopicoLei } from '../TopicoLei';
import { TopicoLeiServiceService } from 'src/app/services/topico-lei-service.service';

export type TL = {

   topicoLei: TopicoLei;
}
@Component({
  selector: 'app-topicos-leis-edicao',
  templateUrl: './topicos-leis-edicao.component.html',
  styleUrls: ['./topicos-leis-edicao.component.css']
})
export class TopicosLeisEdicaoComponent implements OnInit {

  formulario!: FormGroup;
  assunto!: Assunto;
  dialogConfig!: MatDialogConfig;
  topicoLei!: TopicoLei;
  assuntos!: Assunto[]
  descricaoAssuntoPesquisa!: string;
  descricaoAssuntoEscolhida!: string;

  constructor(
    private topicoLeiService: TopicoLeiServiceService,
    private assuntoService: AssuntoService,
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
      descricaoAssunto: new FormControl('',),
      idAssunto: new FormControl('',)
    });

    this.getId?.disable();
    // this.getDescricaoDisciplina?.disable()

  }

  get getId() {
    return this.formulario.get("id");
  }
  get getDescricao() {
    return this.formulario.get("descricao");
  }

  get getDescricaoAssunto() {
    return this.formulario.get("descricaoAssunto");
  }

  get getIdAssunto() {
    return this.formulario.get("idAssunto");
  }

  verificaEdicao() {

    this.topicoLei = new TopicoLei();
    const state = this.location.getState() as TL;
    if (state.topicoLei != undefined) {
      this.topicoLei = state.topicoLei;
      console.log(state)
      this.assunto = new Assunto();
      
      this.assunto = state.topicoLei.assunto
      this.descricaoAssuntoEscolhida = this.assunto.descricao
      this.descricaoAssuntoPesquisa = this.assunto.descricao
    } else {
      this.router.navigate(["/topicos-leis/cadastro"])

    }
  }

  onSubmit() {

    if (this.formulario.invalid) {
      return;
    }

    this.topicoLei.assuntoId = this.topicoLei.assunto.id
    this.topicoLeiService.editar(this.topicoLei)
      .subscribe(response => {

        this.dialog.open(DialogComponent, {
          disableClose: true,
          height: "200px",
          width: "400px",
          data: {
            msg: "Topico/Lei editado com sucesso!",
            icon: "check_circle"
          }

        })
        this.formulario.reset()
        this.router.navigate(["/topicos-leis/lista"])
      }, errorResponse => {

        this.dialog.open(DialogComponent, {
          disableClose: true,
          height: "350px",
          width: "400px",
          data: {
            msg: errorResponse.error.titulo ? errorResponse.error.titulo : "Não foi possivel editar esse Topico/Lei!",
            icon: "gpp_bad"
          }

        })
      })
  }

  buscarPorDescricao() {
    this.assuntoService.retornarPorDescricaoSemPaginacao(this.descricaoAssuntoPesquisa)
      .subscribe(response => {
        this.assuntos = response;

      }, errorResponse => {

      })
  }

  setarIdDisciplinaEscolhida(id: number, descricao: string) {
    this.assunto.disciplinaId = id
    
    if (descricao.length > 40) {
      this.descricaoAssuntoEscolhida = descricao
      this.descricaoAssuntoEscolhida = this.descricaoAssuntoEscolhida.substring(0, 40)
      this.descricaoAssuntoEscolhida = this.descricaoAssuntoEscolhida.concat("...")
    } else {
      this.descricaoAssuntoEscolhida = descricao
    }
    this.getIdAssunto?.setValue(id);
    this.topicoLei.assuntoId = id;
    this.topicoLei.assunto.descricao = descricao;
    this.topicoLei.assunto.id = id;
    console.log(this.assunto)
  }

  cancelar() {
    this.router.navigate(["/topicos-leis/lista"])
  }


}
