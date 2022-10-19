import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Assunto, AssuntoPage } from '../assuntos/Assunto';

@Injectable({
  providedIn: 'root'
})
export class AssuntoService {

  constructor(private httpcliente: HttpClient) { }

  salvar(assunto: Assunto): Observable<Assunto> {
    return this.httpcliente.post<Assunto>(environment.apiURL + "/assuntos/cadastrar", assunto);
  }

  editar(assunto: Assunto): Observable<Assunto>{
    return this.httpcliente.put<Assunto>(environment.apiURL + `/assuntos/editar/${assunto.id}`,assunto);
  }

  retornarPorDescricao(descricao: string):Observable<AssuntoPage>{
    return this.httpcliente.get<AssuntoPage>(environment.apiURL+ `/assuntos/search/${descricao}`);

  }
  retornarTodas(page: number, size:number): Observable<AssuntoPage> {
    return this.httpcliente.get<AssuntoPage>(environment.apiURL + `/assuntos?size=${size? size: 10}&page=${page? page: 0}`);
  }

  deletar(assunto: Assunto){
    return this.httpcliente.delete(environment.apiURL+`/assuntos/${assunto.id}`);
  }


}
