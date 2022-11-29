import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayouteComponent } from '../componentes/layoute/layoute.component';
import { SumarioComponent } from './sumario/sumario.component';

const routes: Routes = [
   {path:'filtros', component: LayouteComponent, children:[
    {path: "sumario", component: SumarioComponent}
   ],
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiltrosRoutingModule { }
