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
    this.disciplina = new Disciplina()
    this.assunto = new Assunto()
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
    this.topicoLeiPesquisa=""
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
    this.topicoLeiPesquisa= ""
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
    console.log(this.artigos)
  }

  buscarArtigosRelacionadosTopicoLei() {
    this.artigoService.retornarRelacaoComTopicoLeiPaginado(this.topicoLei.id)
     .subscribe(response => {
        this.artigoPage= response
        this.artigos= this.artigoPage.content;
     })
  }

  pegaMudancaPaginacao(evento: PageEvent){
    this.artigoService.retornarRelacaoComTopicoLeiPaginado(this.topicoLei.id).
      subscribe(response => {
        this.artigoPage = response
        this.artigos = this.artigoPage.content
      })
  }
 
  selecionarCategoriaArtigo(categoria: string) {
    this.pena.categoria = categoria;
    console.log(this.pena.categoria)
  }

  sec(cat: MatOptionSelectionChange){
      console.log(cat.source.value)
  }

  selecionarCategoriaPena(categoria:string) {
   console.log(categoria)
  }

}
