import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title/card-title.component';
import { MatCardModule } from '@angular/material/card';
import { TitleListComponent } from './title-list/title-list.component';



@NgModule({
  declarations: [
    CardTitleComponent,
    TitleListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
  ,
  exports:[
    CardTitleComponent,
    TitleListComponent
  ]
})
export class ComponentesModule { }
