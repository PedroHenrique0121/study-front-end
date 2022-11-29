import { Component, OnInit } from '@angular/core';
import { Artigo } from 'src/app/artigos/Artigo';
import { Assunto } from 'src/app/assuntos/Assunto';
import { Disciplina } from 'src/app/disciplinas/Disciplina';
import { AssuntoService } from 'src/app/services/assunto.service';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-sumario',
  templateUrl: './sumario.component.html',
  styleUrls: ['./sumario.component.css']
})
export class SumarioComponent implements OnInit {
  panelOpenState = false;
  panelOpenStateAssunto = false;

  disciplinas!: Disciplina[];
  disciplina!: Disciplina;
  disciplinaPesquisa!: string;
  assuntos!: Assunto[];
  assunto!: Assunto;
  assuntoPesquisa!: string;
  artigos!: Artigo[];

  constructor(private disciplinaService: DisciplinaService,
    private assuntoService: AssuntoService) {
    this.disciplina = new Disciplina()
    this.assunto= new Assunto()
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
    this.assuntos=[]
    this.assunto= new Assunto()
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
  }

 
}
