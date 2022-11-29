import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltrosRoutingModule } from './filtros-routing.module';
import { SumarioComponent } from './sumario/sumario.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ComponentesModule } from '../componentes/componentes.module';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    SumarioComponent
  ],
  imports: [
    CommonModule,
    FiltrosRoutingModule,
    ComponentesModule,
    FormsModule,
    ReactiveFormsModule,

    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatMenuModule,
    MatFormFieldModule, 
    MatAutocompleteModule,
    MatInputModule,
    

  ],
  exports:[
    SumarioComponent
  ]
})
export class FiltrosModule { }
