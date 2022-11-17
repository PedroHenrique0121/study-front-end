import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PenasRoutingModule } from './penas-routing.module';
import { PenasCadastroComponent } from './penas-cadastro/penas-cadastro.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  declarations: [
    PenasCadastroComponent
  ],
  imports: [
    CommonModule,
    PenasRoutingModule,

    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressBarModule,
    ComponentesModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  exports:[
    PenasCadastroComponent
  ]
})
export class PenasModule { }
