import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayouteComponent } from './componentes/layoute/layoute.component';
import { AutenticadoGuard } from './guards/autenticado.guard';

const routes: Routes = [

  {path:"", component: LayouteComponent, canActivate:[AutenticadoGuard], children:[
   
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
