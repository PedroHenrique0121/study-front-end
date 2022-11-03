import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { ArtigoCadastroComponent } from './artigo-cadastro/artigo-cadastro.component';
import { ArtigoEdicaoComponent } from './artigo-edicao/artigo-edicao.component';
import { ArtigoListaComponent } from './artigo-lista/artigo-lista.component';

const routes: Routes = [
  {
    path: "artigos", component: LayouteComponent, children: [
      { path: "cadastro", component: ArtigoCadastroComponent },
      { path: "lista", component: ArtigoListaComponent },
      { path: "edicao", component: ArtigoEdicaoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtigosRoutingModule { }
