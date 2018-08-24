import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lista-clientes-input',
  templateUrl: './lista-clientes-input.component.html',
  styleUrls: ['./lista-clientes-input.component.css']
})
export class ListaClientesInputComponent implements OnInit, OnDestroy {

  clientes: Cliente[];

  private sub: any;

  constructor(service: ClienteService) {
    this.sub = service.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
