import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pena } from '../penas/Pena';

import { Observable } from "rxjs"
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PenasService {

  constructor(private httpcliente: HttpClient) { }

  cadastrar(pena: Pena): Observable<Pena> {
    return this.httpcliente.post<Pena>(environment.apiURL +"/penas/", pena);
  }

}
