import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtigosRoutingModule } from './artigos-routing.module';
import { ArtigoCadastroComponent } from './artigo-cadastro/artigo-cadastro.component';
import { ArtigoService } from '../services/artigo.service';
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
import { ArtigoEdicaoComponent } from './artigo-edicao/artigo-edicao.component';
import { ArtigoListaComponent } from './artigo-lista/artigo-lista.component';


@NgModule({
  declarations: [
    ArtigoCadastroComponent,
    ArtigoEdicaoComponent,
   ArtigoListaComponent
  ],
  imports: [
    CommonModule,
    ArtigosRoutingModule,

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
  ]
  ,exports:[
    ArtigoCadastroComponent,
    ArtigoEdicaoComponent,
    ArtigoListaComponent
  ]
  ,providers:[
    ArtigoService
  ]
})
export class ArtigosModule { }
