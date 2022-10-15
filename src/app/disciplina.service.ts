import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Disciplina, DisciplinaPage } from './disciplinas/Disciplina';



@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(private httpcliente: HttpClient) { }

  salvar(disciplina: Disciplina): Observable<Disciplina> {
    return this.httpcliente.post<Disciplina>(environment.apiURL + "/disciplinas/cadastrar", disciplina);
  }

  editar(id: number,disciplina: Disciplina): Observable<Disciplina>{
    return this.httpcliente.put<Disciplina>(environment.apiURL + `/disciplinas/editar/${id}`,disciplina);
  }

  retornarPorDescricao(descricao: string):Observable<DisciplinaPage>{
    return this.httpcliente.get<DisciplinaPage>(environment.apiURL+ `disciplinas//search/${descricao}`);

  }
  retornarTodas(page: number, size:number): Observable<DisciplinaPage> {
    return this.httpcliente.get<DisciplinaPage>(environment.apiURL + `/disciplinas?size=${size? size: 10}&page=${page? page: 0}`);
  }

  deletar(disciplina: Disciplina){
    return this.httpcliente.delete(environment.apiURL+`/disciplinas/${disciplina.id}`);
  }

}
