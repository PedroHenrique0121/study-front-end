import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaEdicaoComponent } from './disciplina-edicao/disciplina-edicao.component';
import { DisciplinaListaComponent } from './disciplina-lista/disciplina-lista.component';

const routes: Routes = [
  {
    path: "disciplinas", component: LayouteComponent, children: [
      { path: "cadastro", component: DisciplinaCadastroComponent },
      { path: "lista", component: DisciplinaListaComponent },
      { path: "editar", component: DisciplinaEdicaoComponent }

    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinasRoutingModule { }
