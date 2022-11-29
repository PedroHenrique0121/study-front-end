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
  assuntos!: Assunto[];
  artigos!: Artigo[];

  constructor(private disciplinaService: DisciplinaService,
    private assuntoService: AssuntoService) { }

  ngOnInit(): void {
    this.retornarTodasDisciplinaSemPaginacao();
  }

  retornarTodasDisciplinaSemPaginacao() {
    this.disciplinaService.retornarTodasSemPaginacao()
      .subscribe(response => {
        this.disciplinas = response;
      })
  }

  abrirAssuntos(disciplina: Disciplina) {
    this.panelOpenStateAssunto = false;
    this.assuntoService.retornarTodosVinculadoDisciplina(disciplina)
      .subscribe(response => {
        this.assuntos = response;
      })
    return this.panelOpenStateAssunto;
  }
}
