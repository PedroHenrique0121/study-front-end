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

  retornarRelacaoComTopicoLei(id: number): Observable<ArtigoPage>{
     return this.httpcliente.get<ArtigoPage>(environment.apiURL + `/artigos/topicoLei/${id}`);
  }

  retornarPorDescricao(descricao: string, page: number, size: number): Observable<ArtigoPage> {
    return this.httpcliente.get<ArtigoPage>(environment.apiURL + `/artigos/search/pagination/${descricao}?size=${size}&page=${page}`);

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
