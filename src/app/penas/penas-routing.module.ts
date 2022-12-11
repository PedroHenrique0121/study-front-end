import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { AutenticadoGuard } from '../guards/autenticado.guard';
import { PenasCadastroComponent } from './penas-cadastro/penas-cadastro.component';

const routes: Routes = [
  {path:"penas", component: LayouteComponent, canActivate: [AutenticadoGuard], children: [
    {path:"cadastro", component:PenasCadastroComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PenasRoutingModule { }
