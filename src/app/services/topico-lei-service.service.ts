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
    return this.httpcliente.post<TopicoLei>(environment.apiURL + "/topicos-leis/cadastrar", topicoLei);
  }

  editar(topicoLei: TopicoLei): Observable<TopicoLei>{
    return this.httpcliente.put<TopicoLei>(environment.apiURL + `/topicos-leis/editar/${topicoLei.id}`,topicoLei);
  }

  retornarPorDescricao(descricao: string, page:number, size:number):Observable<TopicoLeiPage>{
    return this.httpcliente.get<TopicoLeiPage>(environment.apiURL+ `/topicos-leis/search/pagination/${descricao}?size=${size}&page=${page}`);

  }

  retornarPorDescricaoSemPaginacao(descricao: string): Observable<TopicoLei[]> {
    return this.httpcliente.get<TopicoLei[]>(environment.apiURL + `/topicos-leis/search/${descricao}`);
  }

  retornarTodosSempaginacao(): Observable<TopicoLei[]> {
    return this.httpcliente.get<TopicoLei[]>(environment.apiURL + `/topicos-leis`);
  }

  retornarTodos(page: number, size:number): Observable<TopicoLeiPage> {
    return this.httpcliente.get<TopicoLeiPage>(environment.apiURL + `/topicos-leis/pagination?size=${size}&page=${page}`);
  }

  deletar(topicoLei: TopicoLei){
    return this.httpcliente.delete(environment.apiURL+`/topicos-leis/${topicoLei.id}`);
  }
}
