import { Campanha } from './campanha';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampanhaService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getCampanhas(): Observable< Campanha []> {
    return this.http.get<Campanha[]>(environment.apiUrl + 'campanhas');
  }
  getCampanhaById(id): Observable< Campanha []> {
    return this.http.get<Campanha[]>(environment.apiUrl + 'campanha/' + id);
  }
  getCampanhasByCliente(cliente_id: number): Observable< Campanha []> {
    return this.http.get<Campanha[]>(environment.apiUrl + 'campanhas/cliente/' + cliente_id);
  }

  cadastrarCampanha(campanha: Campanha) {
    return this.http.post( environment.apiUrl + 'campanha', campanha)
    .pipe(
      catchError(err => of('Erro ao inserir a Campanha'))
    );
  }

}
