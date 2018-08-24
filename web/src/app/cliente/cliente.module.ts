import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './view-cliente/cliente.component';
import { ListaClientesInputComponent } from './lista-clientes-input/lista-clientes-input.component';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule

  ],
  declarations: [ClienteComponent, ListaClientesInputComponent],
  exports: [ClienteComponent, ListaClientesInputComponent],
})
export class ClienteModule { }
