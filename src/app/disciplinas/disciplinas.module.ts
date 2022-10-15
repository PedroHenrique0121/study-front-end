import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinasRoutingModule } from './disciplinas-routing.module';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaListaComponent } from './disciplina-lista/disciplina-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DisciplinaEdicaoComponent } from './disciplina-edicao/disciplina-edicao.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DisciplinaService } from '../disciplina.service';
@NgModule({
  declarations: [DisciplinaCadastroComponent,
    DisciplinaListaComponent,
    DisciplinaEdicaoComponent],
  imports: [
    CommonModule,
    DisciplinasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatProgressBarModule
    
  ],
  exports:[
    DisciplinaCadastroComponent,
    DisciplinaListaComponent
  ],
  providers:[
    DisciplinaService
  ]
})
export class DisciplinasModule { }
