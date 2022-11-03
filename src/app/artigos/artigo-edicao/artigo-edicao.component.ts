import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { ArtigoService } from 'src/app/services/artigo.service';
import { TopicoLeiServiceService } from 'src/app/services/topico-lei-service.service';
import { TopicoLei } from 'src/app/topicos-leis/TopicoLei';
import { Artigo, ArtigoPage } from '../Artigo';



 export type A={
       artigo: Artigo,
 }

 
@Component({
  selector: 'app-artigo-edicao',
  templateUrl: './artigo-edicao.component.html',
  styleUrls: ['./artigo-edicao.component.css']
})
export class ArtigoEdicaoComponent implements OnInit {

  formulario!: FormGroup;
  artigos!: Artigo[];
  artigo!: Artigo;
  topicoLei!: TopicoLei;
  topicosLeis!: TopicoLei[];
  artigoPage!: ArtigoPage;
  descricaoTopicoLeiPesquisa!: string;
  descricaoTopicoLeiEscolhido!: string;
  statusPesquisaPorDescricao!: boolean;
   
  constructor(private artigoService: ArtigoService,
    private topicoLeiService: TopicoLeiServiceService,
    private matDialog: MatDialog,
    private router: Router,
    private location: Location) {
    this.topicoLei = new TopicoLei();
    
  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      id: new FormControl('',),
      descricao: new FormControl('', [Validators.required,]),
      descricaoTopicoLei: new FormControl('',),
      numero: new FormControl('',[Validators.required]),
      categoria: new FormControl('',[Validators.required])
     

    });

    this.id?.disable();
    // this.getDescricaoDisciplina?.disable()
    this.verificaEdicao()
  }

  get id() {
    return this.formulario.get("id");
  }
  get descricao() {
    return this.formulario.get("descricao");
  }

  get descricaoTopicoLei() {
    return this.formulario.get("descricaoTopicoLei");
  }

  get categoria() {
    return this.formulario.get("categoria");
  }
  get numero() {
    return this.formulario.get("numero");
  }

  verificaEdicao() {
    this.artigo = new Artigo();
    const state = this.location.getState() as A;
    
    if (state.artigo != undefined) {
      this.artigo = state.artigo

      console.log(this.artigo)
      this.artigo.topicoLeiId=this.artigo.topicoLei.id
      this.descricaoTopicoLeiPesquisa =this.artigo.topicoLei.descricao
      this.descricaoTopicoLeiEscolhido= this.artigo.topicoLei.descricao
      this.topicoLei.descricao= this.artigo.topicoLei.descricao
    } else {
      this.router.navigate(["/artigos/lista"])

    }
  }
  onSubmit() {

    if (this.formulario.invalid) {
      return;
    }
   
    this.artigoService.editar(this.artigo)
      .subscribe(response => {

        this.matDialog.open(DialogComponent, {
          disableClose: true,
          height: "200px",
          width: "400px",
          data: {
            msg: "Artigo editado com sucesso!",
            icon: "check_circle"
          }

        })
        this.formulario.reset()
        this.router.navigate(["/artigos/lista"])
      }, errorResponse => {

        this.matDialog.open(DialogComponent, {
          disableClose: true,
          height: "350px",
          width: "400px",
          data: {
            msg: errorResponse.error.titulo ? errorResponse.error.titulo : "Não foi possivel editar esse artigo!",
            icon: "gpp_bad"
          }

        })
      })
  }

  buscarPorDescricao() {

    this.topicoLeiService.retornarPorDescricaoSemPaginacao(this.descricaoTopicoLeiPesquisa)
      .subscribe(response => {
        this.topicosLeis = response;

      }, errorResponse => {

      })
  }

  setarIdTopicoLeiEscolhida(id: number, descricao: string) {
   
    if (descricao.length > 40) {
      this.descricaoTopicoLeiEscolhido = descricao
      this.descricaoTopicoLeiEscolhido = this.descricaoTopicoLeiEscolhido.substring(0, 40)
      this.descricaoTopicoLeiEscolhido = this.descricaoTopicoLeiEscolhido.concat("...")
    } else {
      this.descricaoTopicoLeiEscolhido = descricao
    }
   
    this.artigo.topicoLeiId = id
    this.artigo.topicoLei.descricao = descricao;
    this.artigo.topicoLei.id = id;
    
  }

  cancelar() {
    this.router.navigate(["/artigos/lista"])
  }
}
