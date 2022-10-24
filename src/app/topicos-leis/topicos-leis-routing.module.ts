import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { TopicosLeisCadastroComponent } from './topicos-leis-cadastro/topicos-leis-cadastro.component';

const routes: Routes = [
  {
    path: "topicos-leis", component: LayouteComponent, children: [
      { path: "cadastro", component: TopicosLeisCadastroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicosLeisRoutingModule { }
