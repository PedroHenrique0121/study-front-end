import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { AutenticadoGuard } from '../guards/autenticado.guard';
import { TopicosLeisCadastroComponent } from './topicos-leis-cadastro/topicos-leis-cadastro.component';
import { TopicosLeisEdicaoComponent } from './topicos-leis-edicao/topicos-leis-edicao.component';
import { TopicosLeisListaComponent } from './topicos-leis-lista/topicos-leis-lista.component';

const routes: Routes = [
  {
    path: "topicos-leis", component: LayouteComponent,canActivate: [AutenticadoGuard], children: [
      { path: "cadastro", component: TopicosLeisCadastroComponent },
      { path: "lista", component: TopicosLeisListaComponent },
      { path: "editar", component: TopicosLeisEdicaoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopicosLeisRoutingModule { }
