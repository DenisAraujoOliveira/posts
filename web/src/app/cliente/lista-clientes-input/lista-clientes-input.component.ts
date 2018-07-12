import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'lista-clientes-input',
  templateUrl: './lista-clientes-input.component.html',
  styleUrls: ['./lista-clientes-input.component.css']
})
export class ListaClientesInputComponent implements OnInit {

  clientes: Cliente[];

  constructor(service: ClienteService) {
    service.getClientes().subscribe(clientes => {
      this.clientes = clientes;
      console.log(clientes);
    });
  }

  ngOnInit() {
  }

}
