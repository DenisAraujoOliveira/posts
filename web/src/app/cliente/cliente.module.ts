import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './view-cliente/cliente.component';
import { ListaClientesInputComponent } from './lista-clientes-input/lista-clientes-input.component';
import { ClienteService } from '../cliente/cliente.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClienteComponent, ListaClientesInputComponent],
  exports: [ClienteComponent, ListaClientesInputComponent],
})
export class ClienteModule { }
