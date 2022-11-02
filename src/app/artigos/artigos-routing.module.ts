import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { ArtigoCadastroComponent } from './artigo-cadastro/artigo-cadastro.component';

const routes: Routes = [
  {
    path: "artigos", component: LayouteComponent, children: [
      { path: "cadastro", component: ArtigoCadastroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtigosRoutingModule { }
