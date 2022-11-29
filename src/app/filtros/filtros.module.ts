import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';
import { SumarioComponent } from './sumario/sumario.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ComponentesModule } from '../componentes/componentes.module';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SumarioComponent
  ],
  imports: [
    CommonModule,
    FiltrosRoutingModule,
    ComponentesModule,

    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule

  ],
  exports:[
    SumarioComponent
  ]
})
export class FiltrosModule { }
