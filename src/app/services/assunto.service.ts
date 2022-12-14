import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Assunto, AssuntoPage } from '../assuntos/Assunto';
import { Disciplina } from '../disciplinas/Disciplina';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {

  constructor(private httpcliente: HttpClient) { }

  salvar(assunto: Assunto): Observable<Assunto> {
    return this.httpcliente.post<Assunto>(environment.apiURL + "/assuntos/cadastrar", assunto);
  }

  editar(assunto: Assunto): Observable<Assunto> {
    return this.httpcliente.put<Assunto>(environment.apiURL + `/assuntos/editar/${assunto.id}`, assunto);
  }

  retornarPorDescricao(descricao: string, page: number, size: number): Observable<AssuntoPage> {
    return this.httpcliente.get<AssuntoPage>(environment.apiURL + `/assuntos/search/pagination/${descricao}?size=${size}&page=${page}`);

  }

  retornarPorDescricaoSemPaginacao(descricao: string): Observable<Assunto[]> {
    return this.httpcliente.get<Assunto[]>(environment.apiURL + `/assuntos/search/${descricao}`);
  }

  retornarTodosSempaginacao(): Observable<Assunto[]> {
    return this.httpcliente.get<Assunto[]>(environment.apiURL + `/assuntos`);
  }

  retornarTodosVinculadoDisciplina(disciplina: Disciplina, assuntoPesquisa: string): Observable<Assunto[]> {
    console.log(`/assuntos/${assuntoPesquisa}/disciplina/${disciplina.id}`)
    
    return this.httpcliente.get<Assunto[]>(environment.apiURL + `/assuntos/${assuntoPesquisa}/disciplina/${disciplina.id}`);
  }

  retornarTodos(page: number, size: number): Observable<AssuntoPage> {
    return this.httpcliente.get<AssuntoPage>(environment.apiURL + `/assuntos/pagination?size=${size}&page=${page}`);
  }

  deletar(assunto: Assunto) {
    return this.httpcliente.delete(environment.apiURL + `/assuntos/${assunto.id}`);
  }


}
