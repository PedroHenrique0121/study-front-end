import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/componentes/dialog/dialog.component';
import { ArtigoService } from 'src/app/services/artigo.service';
import { TopicoLeiServiceService } from 'src/app/services/topico-lei-service.service';
import { TopicoLei, TopicoLeiPage } from 'src/app/topicos-leis/TopicoLei';
import { Artigo } from '../Artigo';

@Component({
  selector: 'app-artigo-cadastro',
  templateUrl: './artigo-cadastro.component.html',
  styleUrls: ['./artigo-cadastro.component.css']
})
export class ArtigoCadastroComponent implements OnInit {

  formulario!: FormGroup;
  artigo!: Artigo;
  
  dialogConfig!: MatDialogConfig;
  topicosLeis!: TopicoLei[];
  TopicoLeiPage!: TopicoLeiPage;
  descricaoTopicoLeiPesquisa!: string

  descricaoTopicoLei!: string;

  constructor(private fb: FormBuilder,
    private artigoService: ArtigoService,
    private dialog: MatDialog,
    private router: Router,
    private topicoLeiService: TopicoLeiServiceService
  ) {
    this.artigo = new Artigo();

  }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      descricao: new FormControl('', [Validators.required,]),
      topicoLeiId: new FormControl('', [Validators.required]),
      descricaoTopicoLei: new FormControl('', []),
      categoria: new FormControl('',[Validators.required]),
      numero: new FormControl('',[Validators.required])

    });


  }

  get descricao() {
    return this.formulario.get("descricao");
  }
  get topicoLeiId() {
    return this.formulario.get("topicoLeiId");
  }
  get categoria() {
    return this.formulario.get("categoria");
  }
  get numero() {
    return this.formulario.get("numero");
  }

  // get descricaoD() {
  //   return this.formulario.get("descricaoTopicoLei");
  // }

  onSubmit() {

    if (this.topicoLeiId?.hasError('required')) {
      this.dialog.open(DialogComponent, {
        disableClose: true,
        height: "200px",
        width: "400px",
        data: {
          msg: "Enescessario escolher uma topicoLei!",
          icon: "gpp_bad"
        }

      })
    }
    if (this.formulario.invalid) {
      return;
    } else {
      this.artigoService.salvar(this.artigo).
        subscribe(response => {
          this.dialog.open(DialogComponent, {
            disableClose: true,
            height: "200px",
            width: "400px",
            data: {
              msg: "Artigo cadastrado com sucesso!",
              icon: "check_circle"
            }
          })

          this.formulario.reset()
          this.descricaoTopicoLei = ""
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

  buscarPorTodastopicoLeis() {
    this.topicoLeiService.retornarTodosSempaginacao()
      .subscribe(response => {

        this.topicosLeis = response

      }, errorResponse => {

      })

  }

  setarIdTopicoLeiEscolhido(id: number, descricao: string) {
    this.artigo.topicoLeiId = id

    if (descricao.length > 40) {
      this.descricaoTopicoLei = descricao
      this.descricaoTopicoLei = this.descricaoTopicoLei.substring(0, 40)
      this.descricaoTopicoLei = this.descricaoTopicoLei.concat("...")
    } else {
      this.descricaoTopicoLei = descricao
    }
    this.topicoLeiId?.setValue(id)
  }
  buscarPorDescricao() {

    this.topicoLeiService.retornarPorDescricaoSemPaginacao(this.descricaoTopicoLeiPesquisa)
      .subscribe(response => {
        this.topicosLeis = response;

      }, errorResponse => {

      })
  }

}
