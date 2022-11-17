import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Artigo } from 'src/app/artigos/Artigo';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { ArtigoService } from 'src/app/services/artigo.service';
import { PenasService } from 'src/app/services/penas.service';
import { TopicoLeiServiceService } from 'src/app/services/topico-lei-service.service';
import { TopicoLei, TopicoLeiPage } from 'src/app/topicos-leis/TopicoLei';
import { Pena } from '../Pena';

@Component({
  selector: 'app-penas-cadastro',
  templateUrl: './penas-cadastro.component.html',
  styleUrls: ['./penas-cadastro.component.css']
})
export class PenasCadastroComponent implements OnInit {

  formulario!: FormGroup;
  pena!: Pena;
  artigo!:Artigo;
  artigos!: Artigo[];
  dialogConfig!: MatDialogConfig;
  descricaoArtigoPesquisa!: string


  constructor(private fb: FormBuilder,
    private artigoService: ArtigoService,
    private dialog: MatDialog,
    private router: Router,
    private penasService: PenasService
  ) {
    this.pena = new Pena();
    this.artigo= new Artigo()

  }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      descricao: new FormControl('', [Validators.required,]),
      idArtigo: new FormControl('', [Validators.required]),
      descricaoArtigo: new FormControl('', []),
      categoria: new FormControl('', [Validators.required]),
    });
  }

  get descricao() {
    return this.formulario.get("descricao");
  }
  get idArtigo() {
    return this.formulario.get("idArtigo");
  }
  get categoria() {
    return this.formulario.get("categoria");
  }

  onSubmit() {
    if (this.idArtigo?.hasError('required')) {
      this.dialog.open(DialogComponent, {
        disableClose: true,
        height: "200px",
        width: "400px",
        data: {
          msg: "Enescessario escolher um artigo!",
          icon: "gpp_bad"
        }
      })
    }

    if (this.formulario.invalid) {
      return;
    } else {
      this.penasService.cadastrar(this.pena).
        subscribe(response => {
          this.dialog.open(DialogComponent, {
            disableClose: true,
            height: "200px",
            width: "400px",
            data: {
              msg: "Pena cadastrado com sucesso!",
              icon: "check_circle"
            }
          })
          this.formulario.reset()
        }, errorResponse => {
          console.log(errorResponse)
          this.dialog.open(DialogComponent, {
            disableClose: true,
            height: "200px",
            width: "400px",
            data: {
              msg: errorResponse.error.titulo ? errorResponse.error.titulo : "Não foi possivel realizar o cadastro",
              icon: "gpp_bad"
            }

          })
        })

    }
  }

  listar() {
    this.router.navigate(["/artigos/lista"])
  }

  setarArtigoEscolhido(artigo:Artigo) {
    this.artigo= artigo;
    this.pena.artigoId= artigo.id;
    this.idArtigo?.setValue(artigo.id)
    if (artigo.descricao.length > 40) {
      this.artigo.descricao = artigo.descricao
      this.artigo.descricao = this.artigo.descricao.substring(0, 40)
      this.artigo.descricao = this.artigo.descricao.concat("...")
    } else {
      this.artigo.descricao= artigo.descricao
    }
   
  }

  buscarPorDescricao() {
    this.artigoService.retornarPorDescricaoSemPaginacao(this.descricaoArtigoPesquisa)
      .subscribe(response => {
        this.artigos = response;
      }, errorResponse => {

      })
  }

}
