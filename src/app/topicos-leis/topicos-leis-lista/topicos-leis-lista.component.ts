import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { AssuntoService } from 'src/app/services/assunto.service';
import { TopicoLeiServiceService } from 'src/app/services/topico-lei-service.service';
import { TopicoLei, TopicoLeiPage } from '../TopicoLei';


@Component({
  selector: 'app-topicos-leis-lista',
  templateUrl: './topicos-leis-lista.component.html',
  styleUrls: ['./topicos-leis-lista.component.css']
})
export class TopicosLeisListaComponent implements OnInit {

  topicosLeis!: TopicoLei[];
  topicoLeiPage!: TopicoLeiPage;
  descricaoTopicoLeiPesquisa!: string;

  statusPesquisaPorDescricao!: boolean;

  constructor(private topicoLeiService: TopicoLeiServiceService,
    private matDialog: MatDialog,
    private router: Router) {

  }

  ngOnInit(): void {
    this.buscarPorTodosTopicosLeis(0, 7)
  }

  buscarPorTodosTopicosLeis(page: number, size: number) {
    this.topicoLeiService.retornarTodos(page, size)
      .subscribe(response => {
        this.topicoLeiPage = response
        this.topicosLeis = response.content
        console.log(this.topicosLeis)
      }, errorResponse => {

      })

  }

  pegaMudancaPaginacao(pagina: PageEvent) {
    if (this.descricaoTopicoLeiPesquisa === "") {
      this.statusPesquisaPorDescricao = false
    }
    if (this.statusPesquisaPorDescricao == false) {
      this.buscarPorTodosTopicosLeis(pagina ? pagina.pageIndex : 0, pagina ? pagina.pageSize : 7);
    } else {
      this.buscarPorDescricao(pagina.pageSize, pagina.pageIndex)
    }

    this.topicoLeiService.retornarTodos(pagina.pageIndex, pagina.pageSize).
      subscribe(response => {

        this.topicoLeiPage = response
        this.topicosLeis = this.topicoLeiPage.content
      })
  }

  editar(topicoLei: TopicoLei) {
    this.router.navigate(["/topicos-leis/editar"], { state: { topicoLei: topicoLei } })
  }

  excluir(topicoLei: TopicoLei) {
    this.topicoLeiService.deletar(topicoLei)
      .subscribe(response => {
        this.matDialog.open(DialogComponent, {
          disableClose: true,
          height: "200px",
          width: "400px",
          data: {
            msg: "TopicoLei  excluido com sucesso!",
            icon: "check_circle"
          }

        })
        this.buscarPorTodosTopicosLeis(0, 7);
      }, errorResponse => {

        this.matDialog.open(DialogComponent, {
          disableClose: true,
          height: "300px",
          width: "400px",
          data: {
            msg: errorResponse.error.titulo ? errorResponse.error.titulo : "Não foi possivel excluir este assunto!",
            icon: "gpp_bad"
          }
        })
      })
  }

  buscarPorDescricao(page?: number, size?: number) {
    this.topicoLeiService.retornarPorDescricao(this.descricaoTopicoLeiPesquisa, page ? page : 0, size ? size : 7)
      .subscribe(response => {
        this.topicoLeiPage = response
        this.topicosLeis = this.topicoLeiPage.content
      }, errorResponse => {
        this.topicosLeis = []
      })
  }

}
