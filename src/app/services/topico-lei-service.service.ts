import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { environment } from 'src/environments/environment';
import { TopicoLei, TopicoLeiPage } from '../topicos-leis/TopicoLei';
@Injectable({
  providedIn: 'root'
})
export class TopicoLeiServiceService {

  constructor(private httpcliente: HttpClient) { }

  salvar(topicoLei: TopicoLei): Observable <TopicoLei> {
    return this.httpcliente.post<TopicoLei>(environment.apiURL + "/topicosLeis/cadastrar", topicoLei);
  }

  editar(topicoLei: TopicoLei): Observable<TopicoLei>{
    return this.httpcliente.put<TopicoLei>(environment.apiURL + `/topicosLeis/${topicoLei.id}`,topicoLei);
  }

  retornarPorDescricao(descricao: string, page:number, size:number):Observable<TopicoLeiPage>{
    return this.httpcliente.get<TopicoLeiPage>(environment.apiURL+ `/topicosLeis/search/pagination/${descricao}?size=${size}&page=${page}`);

  }

  retornarPorDescricaoSemPaginacao(descricao: string): Observable<TopicoLei[]> {
    return this.httpcliente.get<TopicoLei[]>(environment.apiURL + `/topicosLeis/search/pagination/${descricao}`);
  }

  retornarTodosSempaginacao(): Observable<TopicoLei[]> {
    return this.httpcliente.get<TopicoLei[]>(environment.apiURL + `/topicosLeis`);
  }

  retornarTodos(page: number, size:number): Observable<TopicoLeiPage> {
    return this.httpcliente.get<TopicoLeiPage>(environment.apiURL + `/topicosLeis/pagination?size=${size}&page=${page}`);
  }

  deletar(topicoLei: TopicoLei){
    return this.httpcliente.delete(environment.apiURL+`/topicosLeis/${topicoLei.id}`);
  }
}
