import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material/core';
import { PageEvent } from '@angular/material/paginator';
import { Artigo, ArtigoPage } from 'src/app/artigos/Artigo';
import { Assunto } from 'src/app/assuntos/Assunto';
import { Disciplina } from 'src/app/disciplinas/Disciplina';
import { Pena } from 'src/app/penas/Pena';
import { ArtigoService } from 'src/app/services/artigo.service';
import { AssuntoService } from 'src/app/services/assunto.service';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { TopicoLeiServiceService } from 'src/app/services/topico-lei-service.service';
import { TopicoLei } from 'src/app/topicos-leis/TopicoLei';


@Component({
  selector: 'app-sumario',
  templateUrl: './sumario.component.html',
  styleUrls: ['./sumario.component.css']
})
export class SumarioComponent implements OnInit {
  panelOpenState = false;
  panelOpenStateAssunto = false;
  formulario!: FormGroup

  disciplinas!: Disciplina[];
  disciplina!: Disciplina;
  disciplinaPesquisa!: string;
  assuntos!: Assunto[];
  assunto!: Assunto;
  assuntoPesquisa!: string;
  topicoLei!: TopicoLei;
  topicosLeis!: TopicoLei[];
  topicoLeiPesquisa!: string;
  artigoPage!: ArtigoPage;
  artigos!: Artigo[];
  artigo!: Artigo;
  pena!: Pena;

  constructor(private disciplinaService: DisciplinaService,
    private assuntoService: AssuntoService,
    private artigoService: ArtigoService,
    private topicoLeiService: TopicoLeiServiceService) {
    this.disciplina = new Disciplina();
    this.assunto = new Assunto();
    this.topicoLei = new TopicoLei();
    this.pena = new Pena();
    this.artigo = new Artigo();

  }

  ngOnInit(): void {

  }

  buscarDisciplinaProDescricao() {
    this.disciplinaService.retornarPorDescricaoSemPaginacao(this.disciplinaPesquisa)
      .subscribe(response => {
        this.disciplinas = response;
      })
  }

  selecionarDisciplina(disciplina: Disciplina) {
    this.disciplina = disciplina;
    this.assuntoPesquisa = ""
    this.assunto = new Assunto();
    this.assuntos = [];
    this.topicoLei = new TopicoLei();
    this.topicosLeis = [];
    this.topicoLeiPesquisa = ""
    this.artigo = new Artigo();
    this.artigos = [];
    this.pena = new Pena();
  }

  retornarTodasDisciplinaSemPaginacao() {
    this.disciplinaService.retornarTodasSemPaginacao()
      .subscribe(response => {
        this.disciplinas = response;
      })
  }

  buscarPorassuntosRelacionadosDisciplina() {
    this.assuntoService.retornarTodosVinculadoDisciplina(this.disciplina, this.assuntoPesquisa)
      .subscribe(response => {
        this.assuntos = response;
      })
  }

  selecionarAssunto(assunto: Assunto) {
    this.assunto = assunto;
    this.artigo = new Artigo();
    this.artigos = [];
    this.topicoLei = new TopicoLei();
    this.topicosLeis = [];
    this.topicoLeiPesquisa = ""
    this.pena = new Pena();
  }

  buscarTopicoLeisRelacionadoAssunto() {
    this.topicoLeiService.retornarPorDescricaoVinculadoAssunto(this.topicoLeiPesquisa, this.assunto.id)
      .subscribe(response => {
        this.topicosLeis = response;
      })
  }

  selecionarTopicoLei(topicoLei: TopicoLei) {
    this.topicoLei = topicoLei;
    this.artigo = new Artigo();
    this.pena = new Pena();
    this.buscarArtigosRelacionadosTopicoLei();
  }

  buscarArtigosRelacionadosTopicoLei(page?: number, size?: number) {
    this.artigoService.retornarRelacaoComTopicoLeiPaginado(this.topicoLei, page? page: 0, size ? size : 3)
      .subscribe(response => {
        this.artigoPage = response
        this.artigos = this.artigoPage.content;
      })
  }

  pegaMudancaPaginacao(evento: PageEvent) {

    if (this.artigo.categoria != undefined && this.pena.categoria != undefined) {
      this.buscarPorCatoriaRelacaoTopicoLeiIEPenaCategoria(evento.pageIndex, evento.pageSize);
    }
    else if (this.artigo.categoria != undefined && this.pena.categoria == undefined) {
      this.buscarPorCategoriaERelacaoComTopicoLei(evento.pageIndex, evento.pageSize);
    }
    else if (this.artigo.categoria == undefined && this.pena.categoria != undefined) {
      this.buscarPorCatoriaRelacaoTopicoLeiIEPenaCategoria(evento.pageIndex, evento.pageSize);
    }
    else {
      console.log(evento.pageIndex, evento.pageSize)
      this.buscarArtigosRelacionadosTopicoLei(evento.pageIndex, evento.pageSize);
    }
  }

  selecionarCategoriaArtigo(categoria: string) {
    this.artigo.categoria = categoria;
    this.pena = new Pena();
    if(this.artigo.categoria== undefined){
      console.log("categria a vaiza ")
      this.buscarArtigosRelacionadosTopicoLei();
    }else{
      this.buscarPorCategoriaERelacaoComTopicoLei();
    }
   
  }

  selecionarCategoriaPena(categoria: string) {
    this.pena.categoria = categoria;
    if(this.pena.categoria== undefined){
      console.log("categria p vaiza ")
      this.buscarPorCategoriaERelacaoComTopicoLei();
    }else{
      this.buscarPorCatoriaRelacaoTopicoLeiIEPenaCategoria()
    }
    
  }

  buscarPorCatoriaRelacaoTopicoLeiIEPenaCategoria(page?: number, size?: number) {
    this.artigoService.retornarPorCategoriaVinculoComTopicoLeiEPelaCategoriaDaPena(this.topicoLei, this.artigo, this.pena, page ? page : 0, size ? size : 3)
      .subscribe(response => {
        this.artigoPage = response;
        this.artigos = this.artigoPage.content
      })
  }

  buscarPorCategoriaERelacaoComTopicoLei(page?: number, size?: number) {
    this.artigoService.retornarPorCategoriaAssociadoTopicoLei(this.artigo, this.topicoLei, page ? page : 0, size ? size : 3)
      .subscribe(response => {
        this.artigoPage = response;
        this.artigos = this.artigoPage.content
      })
  }

}
