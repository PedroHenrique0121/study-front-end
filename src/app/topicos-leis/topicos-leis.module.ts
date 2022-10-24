import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicosLeisRoutingModule } from './topicos-leis-routing.module';
import { ComponentesModule } from '../componentes/componentes.module';
import { TopicosLeisCadastroComponent } from './topicos-leis-cadastro/topicos-leis-cadastro.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { CardTitleComponent } from '../componentes/card-title/card-title.component';

import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TopicoLeiServiceService } from '../services/topico-lei-service.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    TopicosLeisCadastroComponent
  ],
  imports: [
    CommonModule,
    TopicosLeisRoutingModule,
    RouterModule,
    ComponentesModule,

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
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    TopicosLeisCadastroComponent
  ],
  providers: [
    TopicoLeiServiceService
  ]
})
export class TopicosLeisModule { }
