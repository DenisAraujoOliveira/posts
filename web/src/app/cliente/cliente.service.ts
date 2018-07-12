import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Cliente } from './cliente';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  http: HttpClient;
  constructor(http: HttpClient) {
    this.http = http;
   }

  getClientes(): Observable< Cliente []> {
    return this.http.get<Cliente[]>(environment.apiUrl + 'clientes');

  }
}
