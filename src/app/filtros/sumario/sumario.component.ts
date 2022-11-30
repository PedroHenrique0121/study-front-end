import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Artigo } from 'src/app/artigos/Artigo';
import { Assunto } from 'src/app/assuntos/Assunto';
import { Disciplina } from 'src/app/disciplinas/Disciplina';
import { Pena } from 'src/app/penas/Pena';
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
  formulario!: FormGroup

  disciplinas!: Disciplina[];
  disciplina!: Disciplina;
  disciplinaPesquisa!: string;
  assuntos!: Assunto[];
  assunto!: Assunto;
  assuntoPesquisa!: string;
  artigos!: Artigo[];


  pena!: Pena;

  constructor(private disciplinaService: DisciplinaService,
    private assuntoService: AssuntoService) {
    this.disciplina = new Disciplina()
    this.assunto = new Assunto()
    this.pena = new Pena();
  }

  ngOnInit(): void {
         this.formulario = new FormGroup({
        
          categoria: new FormControl('', ),
        });
  }

  buscarDisciplinaProDescricao() {
    this.disciplinaService.retornarPorDescricaoSemPaginacao(this.disciplinaPesquisa)
      .subscribe(response => {
        this.disciplinas = response;
      })
  }

  selecionarDisciplina(disciplina: Disciplina) {
    this.disciplina = disciplina;
    this.assuntos = []
    this.assunto = new Assunto()
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

  selecionarCategoria(categoria: string){
      console.log(categoria)
  }


}
