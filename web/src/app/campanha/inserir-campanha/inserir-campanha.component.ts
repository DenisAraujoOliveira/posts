import { Cliente } from './../../cliente/cliente';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../../cliente/cliente.service';
import * as moment from 'moment';
import { CampanhaService } from '../campanha.service';
import swal from 'sweetalert2';
import { Campanha } from '../campanha';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-campanha',
  templateUrl: './inserir-campanha.component.html',
  styleUrls: ['./inserir-campanha.component.css']
})
export class InserirCampanhaComponent implements OnInit {

  form: FormGroup;
  clientes: Cliente[];
  sub: any;
  minDate = moment().format();
  minDateFinal;
  disableDataFinal: Boolean = true;

  constructor(
    private fb: FormBuilder,
    clienteService: ClienteService,
    private campanhaService: CampanhaService,
    private router: Router
  ) {
    this.sub = clienteService.getClientes().subscribe(cliente => this.clientes = cliente);
  }


  ngOnInit() {
    this.form = this.fb.group({
      nome_campanha: [null, Validators.required],
      comeco_campanha: [null, Validators.required],
      final_campanha: [null],
      cliente: this.fb.group({
        id: ['', Validators.required],
        nome_cliente: [null]
      }),
    });
  }

  selecionarCliente(event) {
    this.form.patchValue({cliente: event.value});
  }

  dataComecoInserida() {
    if ( this.form.controls['comeco_campanha'].valid) {
      this.disableDataFinal = false;
      this.minDateFinal = moment(this.form.value.comeco_campanha).format();
    }
  }

  onSubmit() {
    console.log(this.form.value);
    if (!this.form.valid) {
      swal({
        position: 'top-end',
        type: 'error',
        title: 'Oops...',
        text: 'Algo deu errado tente novamente.',

      });
    } else {
      this.sub = this.campanhaService.cadastrarCampanha(this.form.value).subscribe( (res: Campanha) => {
        console.log(res);
    });
    }
  }

}
