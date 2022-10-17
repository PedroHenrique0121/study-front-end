import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title/card-title.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    CardTitleComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
  ,
  exports:[
    CardTitleComponent
  ]
})
export class ComponentesModule { }
