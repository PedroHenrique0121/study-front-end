import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicosLeisRoutingModule } from './topicos-leis-routing.module';
import { ComponentesModule } from '../componentes/componentes.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TopicosLeisRoutingModule,

    ComponentesModule
  ]
})
export class TopicosLeisModule { }
