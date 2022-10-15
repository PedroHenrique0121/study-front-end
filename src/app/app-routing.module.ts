import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayouteComponent } from './componentes/layoute/layoute.component';

const routes: Routes = [

  {path:"", component: LayouteComponent, children:[
   
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
