import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { AssuntoService } from 'src/app/services/assunto.service';
import { Assunto, AssuntoPage } from '../Assunto';

@Component({
  selector: 'app-assunto-lista',
  templateUrl: './assunto-lista.component.html',
  styleUrls: ['./assunto-lista.component.css']
})
export class AssuntoListaComponent implements OnInit {
  assuntos!: Assunto[];
  assuntoPage!: AssuntoPage;
  descricaoAssuntoPesquisa!: string;

  statusPesquisaPorDescricao!: boolean;

  constructor(private assuntoService: AssuntoService,
    private matDialog: MatDialog,
    private router: Router) {

  }

  ngOnInit(): void {

    this.buscarPorTodosAssuntos(0, 7)

  }

  buscarPorTodosAssuntos(page: number, size: number) {

    this.assuntoService.retornarTodos(page, size)
      .subscribe(response => {
        this.assuntoPage = response
        this.assuntos = response.content
      
      },errorResponse=>{
       
       
      })

  }

  pegaMudancaPaginacao(pagina: PageEvent) {
    if (this.descricaoAssuntoPesquisa === "") {
      this.statusPesquisaPorDescricao = false
    }
    if (this.statusPesquisaPorDescricao == false) {
      this.buscarPorTodosAssuntos(pagina?pagina.pageIndex: 0,pagina? pagina.pageSize: 7);
    } else {
      this.buscarPorDescricao(pagina.pageSize, pagina.pageIndex)
    }

    this.assuntoService.retornarTodos(pagina.pageIndex, pagina.pageSize).
      subscribe(response => {
 
        this.assuntoPage = response
        this.assuntos = this.assuntoPage.content
      })


  }

  editar(assunto: Assunto) {

    this.router.navigate(["/assuntos/editar"], { state: { assunto: assunto } })

  }

  excluir(assunto: Assunto) {
    this.assuntoService.deletar(assunto)
      .subscribe(response => {

        this.matDialog.open(DialogComponent, {
          disableClose: true,
          height: "200px",
          width: "400px",
          data: {
            msg: "Assunto  excluido com sucesso!",
            icon: "check_circle"
          }

        })

        this.buscarPorTodosAssuntos(0, 7);

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
  buscarPorDescricao(page?:number,size?:number) {
    
    this.assuntoService.retornarPorDescricao(this.descricaoAssuntoPesquisa,page?page: 0, size?size:7)
      .subscribe(response => {
        this.assuntoPage = response
        this.assuntos = this.assuntoPage.content
        
      }, errorResponse => {
        this.assuntos=[]
      })
  }
  

}
