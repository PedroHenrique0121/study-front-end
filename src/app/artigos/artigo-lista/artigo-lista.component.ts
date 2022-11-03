import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { ArtigoService } from 'src/app/services/artigo.service';
import { TopicoLeiServiceService } from 'src/app/services/topico-lei-service.service';
import { TopicoLei } from 'src/app/topicos-leis/TopicoLei';
import { Artigo, ArtigoPage } from '../Artigo';

@Component({
  selector: 'app-artigo-lista',
  templateUrl: './artigo-lista.component.html',
  styleUrls: ['./artigo-lista.component.css']
})
export class ArtigoListaComponent implements OnInit {

  artigos!: Artigo[];
  topicoLei!: TopicoLei;
  topicosLeis!: TopicoLei[];
  artigoPage!: ArtigoPage;
  descricaoArtigoPesquisa!: string;
  descricaoTopicoLeiPesquisa!: string;
  statusPesquisaPorDescricao!: boolean;

  constructor(private artigoService: ArtigoService,
    private topicoLeiService: TopicoLeiServiceService,
    private matDialog: MatDialog,
    private router: Router) {
    this.topicoLei = new TopicoLei();
  }

  ngOnInit(): void {

  }

  buscarPorTodosArtigos(page: number, size: number) {

    this.artigoService.retornarTodos(page, size)
      .subscribe(response => {
        this.artigoPage = response
        this.artigos = response.content

      }, errorResponse => {


      })

  }

  pegaMudancaPaginacao(pagina: PageEvent) {
    if (this.descricaoArtigoPesquisa === "") {
      this.statusPesquisaPorDescricao = false
    }
    if (this.statusPesquisaPorDescricao == false) {
      this.buscarPorTodosArtigos(pagina ? pagina.pageIndex : 0, pagina ? pagina.pageSize : 7);
    } else {
      this.buscarPorDescricao(pagina.pageSize, pagina.pageIndex)
    }

    this.artigoService.retornarTodos(pagina.pageIndex, pagina.pageSize).
      subscribe(response => {

        this.artigoPage = response
        this.artigos = this.artigoPage.content
      })
  }

  editar(artigo: Artigo) {

    this.router.navigate(["/artigos/edicao"], { state: { artigo: artigo } })

  }

  excluir(artigo: Artigo) {
    this.artigoService.deletar(artigo)
      .subscribe(response => {

        this.matDialog.open(DialogComponent, {
          disableClose: true,
          height: "200px",
          width: "400px",
          data: {
            msg: "Artigo  excluido com sucesso!",
            icon: "check_circle"
          }

        })

        this.buscarPorTodosArtigos(0, 7);

      }, errorResponse => {

        this.matDialog.open(DialogComponent, {
          disableClose: true,
          height: "300px",
          width: "400px",
          data: {
            msg: errorResponse.error.titulo ? errorResponse.error.titulo : "Não foi possivel excluir este artigo!",
            icon: "gpp_bad"
          }

        })
      })
  }

  buscarPorDescricao(page?: number, size?: number) {

    this.artigoService.retornarPorDescricao(this.descricaoArtigoPesquisa, page ? page : 0, size ? size : 7)
      .subscribe(response => {
        this.artigoPage = response
        this.artigos = this.artigoPage.content

      }, errorResponse => {
        this.artigos = []
      })
  }

  buscarTopicoLeiPorDescricao() {
    this.topicoLeiService.retornarPorDescricaoSemPaginacao(this.descricaoTopicoLeiPesquisa)
      .subscribe(response => {
        this.topicosLeis = response;
      }, errorResponse => {

      })
  }

  setarIdTopicoLeiEscolhido(id: number, descricao: string) {
    this.topicoLei.id = id
    this.topicoLei.descricao = descricao;
    this.artigoService.retornarRelacaoComTopicoLei(this.topicoLei.id)
      .subscribe((response)=>{
          this.artigoPage= response;
          this.artigos= this.artigoPage.content
      })
  }
}
