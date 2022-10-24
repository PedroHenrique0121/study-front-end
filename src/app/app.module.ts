import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from "@angular/material/button"
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './componentes/dialog/dialog.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { NavComponent } from './componentes/nav/nav.component';
import { LayouteComponent } from './componentes/layoute/layoute.component'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AssuntosModule } from './assuntos/assuntos.module';
import { MatMenuModule } from '@angular/material/menu';
import {MatTreeModule} from '@angular/material/tree';
import {MatExpansionModule} from '@angular/material/expansion';

import { DisciplinaService } from './services/disciplina.service';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { MatCardModule } from '@angular/material/card';
import { CardTitleComponent } from './componentes/card-title/card-title.component';
import { TopicosLeisModule } from './topicos-leis/topicos-leis.module';



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    SidebarComponent,
    NavComponent,
    LayouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,

    DisciplinasModule,
    AssuntosModule,
    TopicosLeisModule,
    
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatTreeModule,
    MatExpansionModule,
    MatCardModule,
    
  ],
    
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
