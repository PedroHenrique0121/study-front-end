import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title/card-title.component';
import { MatCardModule } from '@angular/material/card';
import { TitleListComponent } from './title-list/title-list.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CardTitleComponent,
    TitleListComponent,
   
  ],
  imports: [
    CommonModule,

    MatCardModule,
    MatExpansionModule,
    MatIconModule
  ]
  ,
  exports:[
    CardTitleComponent,
    TitleListComponent,
   
  ]
})
export class ComponentesModule { }
