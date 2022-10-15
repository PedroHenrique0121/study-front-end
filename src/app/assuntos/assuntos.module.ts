import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssuntosRoutingModule } from './assuntos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AssuntoCadastrosComponent } from './assunto-cadastros/assunto-cadastros.component';


@NgModule({
  declarations: [
    AssuntoCadastrosComponent
  ],
  imports: [
    CommonModule,
    AssuntosRoutingModule,
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
  exports: [
    AssuntoCadastrosComponent
  ]
})
export class AssuntosModule { }
