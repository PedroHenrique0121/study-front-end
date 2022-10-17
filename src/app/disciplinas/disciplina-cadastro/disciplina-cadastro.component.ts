import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { Disciplina } from '../Disciplina';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {

  formulario!: FormGroup;
  disciplina!: Disciplina;
  dialogConfig! :MatDialogConfig;
  
  


  constructor(private fb: FormBuilder,
    private disciplinaService: DisciplinaService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.disciplina = new Disciplina();
   
  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      descricao: new FormControl('', [Validators.required,]),
    });

  }

  get descricao() {
    return this.formulario.get("descricao");
  }

  onSubmit() {
    
    if (this.formulario.invalid) {
      return;
    }

    this.disciplina.userId=11
    this.disciplinaService.salvar(this.disciplina).
    subscribe(response=>{

      this.dialog.open(DialogComponent,{
        disableClose:true,
        height:"200px",
        width:"400px",
        data:{
          msg:"Disciplina cadastrada com sucesso!",
          icon:"check_circle"
        }
      } )

      this.formulario.reset()
    }, errorResponse=>{
      console.log(errorResponse)
      this.dialog.open(DialogComponent,{
        disableClose:true,
        height:"200px",
        width:"400px",
        data:{
          msg: errorResponse.error.titulo? errorResponse.error.titulo: "Não foi possivel realizar o cadastro",
          icon:"gpp_bad"
        }
       
      } )
    })
  }

  listar(){

    this.router.navigate(["/disciplinas/lista"])
  }
}
