import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artigo, ArtigoPage } from '../artigos/Artigo';

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
  
  retornarRelacaoComTopicoLeiPaginado(id: number): Observable<ArtigoPage>{
    console.log(`/artigos/topicoLei/${id}`);
    return this.httpcliente.get<ArtigoPage>(environment.apiURL + `/artigos/pagination/topicoLei/${id}`);
 }

  retornarPorDescricaoAssociadoTopicoLei(descricao: string, topicoLeiId: number, page: number, size: number): Observable<ArtigoPage> {
    return this.httpcliente.get<ArtigoPage>(environment.apiURL + `/artigos/search/pagination/${descricao}/${topicoLeiId}?size=${size}&page=${page}`);
  }

  retornarPorDescricaoSemPaginacao(descricao: string): Observable<Artigo[]> {
    return this.httpcliente.get<Artigo[]>(environment.apiURL + `/artigos/search/${descricao}`);
  }

  retornarTodosSempaginacao(): Observable<Artigo[]> {
    return this.httpcliente.get<Artigo[]>(environment.apiURL + `/artigos`);
  }

  retornarTodos(page: number, size: number): Observable<ArtigoPage> {
    return this.httpcliente.get<ArtigoPage>(environment.apiURL + `/artigos/pagination?size=${size}&page=${page}`);
  }

  deletar(artigo: Artigo) {
    return this.httpcliente.delete(environment.apiURL + `/artigos/${artigo.id}`);
  }
}
