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

  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  disciplinas!: Disciplina[];
  disciplinaPage!: DisciplinaPage;
  matFormField!: MatFormField;




  constructor(private disciplinaService: DisciplinaService,
    private matDialog: MatDialog,
    private router: Router) {

  }

  ngOnInit(): void {

    this.buscarPorTodasDisciplinas(0, 7)

  }

  buscarPorTodasDisciplinas(page: number, size: number) {

    this.disciplinaService.retornarTodas(page, size)
      .subscribe(response => {
        this.disciplinaPage = response
        this.disciplinas = this.disciplinaPage.content
      },errorResponse=>{
       
       
      })

  }

  pegaMudancaPaginacao(pagina: PageEvent) {

    this.disciplinaService.retornarTodas(pagina.pageIndex, pagina.pageSize).
      subscribe(response => {
 
        this.disciplinaPage = response
        this.disciplinas = this.disciplinaPage.content
      })
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
}
