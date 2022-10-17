import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { AssuntoCadastrosComponent } from './assunto-cadastros/assunto-cadastros.component';

const routes: Routes = [
  {path: "assuntos", component: LayouteComponent, children:[
    {path: "cadastro", component: AssuntoCadastrosComponent,}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssuntosRoutingModule { }
