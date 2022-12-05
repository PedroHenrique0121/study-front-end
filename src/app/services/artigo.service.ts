import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artigo, ArtigoPage } from '../artigos/Artigo';
import { Pena } from '../penas/Pena';
import { TopicoLei } from '../topicos-leis/TopicoLei';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {
  constructor(private httpcliente: HttpClient) { }

  salvar(artigo: Artigo): Observable<Artigo> {
    return this.httpcliente.post<Artigo>(environment.apiURL + "/artigos/cadastrar", artigo);
  }

  editar(artigo: Artigo): Observable<Artigo> {
    return this.httpcliente.put<Artigo>(environment.apiURL + `/artigos/editar/${artigo.id}`, artigo);
  }

  retornarRelacaoComTopicoLei(id: number): Observable<Artigo[]>{
     return this.httpcliente.get<Artigo[]>(environment.apiURL + `/artigos/topicoLei/${id}`);
  }
  
  retornarRelacaoComTopicoLeiPaginado(topicoLei:TopicoLei, page: number, size:number): Observable<ArtigoPage>{
    return this.httpcliente.get<ArtigoPage>(environment.apiURL + `/artigos/pagination/topicoLei/${topicoLei.id}?size=${size}&page=${page}`);
 }

  retornarPorDescricaoAssociadoTopicoLei(descricao: string, topicoLeiId: number, page: number, size: number): Observable<ArtigoPage> {
    return this.httpcliente.get<ArtigoPage>(environment.apiURL + `/artigos/search/pagination/${descricao}/${topicoLeiId}?size=${size}&page=${page}`);
  }

  retornarPorCategoriaAssociadoTopicoLei(artigo: Artigo, topicoLei: TopicoLei, page: number, size: number): Observable<ArtigoPage> {
    return this.httpcliente.get<ArtigoPage>(environment.apiURL + `/artigos/pagination/categoria/${artigo.categoria}/topicoLei/${topicoLei.id}?size=${size}&page=${page}`);
  }

  retornarPorDescricaoSemPaginacao(descricao: string): Observable<Artigo[]> {
    return this.httpcliente.get<Artigo[]>(environment.apiURL + `/artigos/search/${descricao}`);
  }

  retornarTodosSempaginacao(): Observable<Artigo[]> {
    return this.httpcliente.get<Artigo[]>(environment.apiURL + `/artigos`);
  }

  retornarPorVinculoComTopicoLeiEPelaCategoriaDaPena(topicoLei:TopicoLei, pena: Pena, page:number, size:number) : Observable<ArtigoPage>{
    console.log(`/artigos/pagination/topicoLei/${topicoLei.id}/pena/${pena.categoria}`)
    return this.httpcliente.get<ArtigoPage>(environment.apiURL +`/artigos/pagination/topicoLei/${topicoLei.id}/pena/${pena.categoria}?size=${size}&page=${page}`);
  }

  retornarTodos(page: number, size: number): Observable<ArtigoPage> {
    return this.httpcliente.get<ArtigoPage>(environment.apiURL + `/artigos/pagination?size=${size}&page=${page}`);
  }

  deletar(artigo: Artigo) {
    return this.httpcliente.delete(environment.apiURL + `/artigos/${artigo.id}`);
  }
}
