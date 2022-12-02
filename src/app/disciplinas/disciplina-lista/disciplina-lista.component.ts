import { Component, OnInit, ViewChild } from '@angular/core';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Disciplina, DisciplinaPage } from '../Disciplina';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DisciplinaEdicaoComponent } from '../disciplina-edicao/disciplina-edicao.component';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';

@Component({
  selector: 'app-disciplina-lista',
  templateUrl: './disciplina-lista.component.html',
  styleUrls: ['./disciplina-lista.component.css']
})
export class DisciplinaListaComponent implements OnInit {

  disciplinas!: Disciplina[];
  disciplinaPage!: DisciplinaPage;
  matFormField!: MatFormField;

  statusPesquisaPorDescricao!: boolean;

  descricaoDisciplinaPesquisa!: string

  constructor(private disciplinaService: DisciplinaService,
    private matDialog: MatDialog,
    private router: Router) {

    this.statusPesquisaPorDescricao = false
  }

  ngOnInit(): void {

    this.buscarPorTodasDisciplinas(0, 7)

  }

  buscarPorTodasDisciplinas(page: number, size: number) {

    this.disciplinaService.retornarTodas(page, size)
      .subscribe(response => {
        this.disciplinaPage = response
        this.disciplinas = this.disciplinaPage.content
      }, errorResponse => {


      })

  }

  
  pegaMudancaPaginacao(pagina: PageEvent) {
    if (this.descricaoDisciplinaPesquisa === "") {
      this.statusPesquisaPorDescricao = false
    }
    if (this.statusPesquisaPorDescricao == false) {
      this.buscarPorTodasDisciplinas(pagina?pagina.pageIndex: 0,pagina? pagina.pageSize: 7);
    } else {
      this.buscarPorDescricao(pagina.pageSize, pagina.pageIndex)
    }

  }

  editar(disciplina: Disciplina) {
    this.router.navigate(["/disciplinas/editar"], { state: { disciplina: disciplina } })
  }

  excluir(disciplina: Disciplina) {
    this.disciplinaService.deletar(disciplina)
      .subscribe(response => {

        this.matDialog.open(DialogComponent, {
          disableClose: true,
          height: "200px",
          width: "400px",
          data: {
            msg: "Disciplina  excluida com sucesso!",
            icon: "check_circle"
          }

        })
        this.buscarPorTodasDisciplinas(0, 7);

      }, errorResponse => {
        this.matDialog.open(DialogComponent, {
          disableClose: true,
          height: "300px",
          width: "400px",
          data: {
            msg: errorResponse.error.titulo ? errorResponse.error.titulo : "Não foi possivel excluir esta disciplina!",
            icon: "gpp_bad"
          }

        })
      })
  }

  buscarPorDescricao(size?: number, page?: number) {

    this.disciplinaService.retornarPorDescricao(this.descricaoDisciplinaPesquisa, size ? size : 7, page ? page : 0)
      .subscribe(response => {
        this.disciplinaPage = response
        this.disciplinas = this.disciplinaPage.content

      }, errorResponse => {
        this.disciplinas = []
      })
    this.statusPesquisaPorDescricao = true
  }


}
