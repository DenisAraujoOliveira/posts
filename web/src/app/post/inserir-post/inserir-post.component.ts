import { PostService } from './../post.service';
import { CampanhaService } from './../../campanha/campanha.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Campanha } from '../../campanha/campanha';
import { Post } from '../post';
import { ClienteService } from '../../cliente/cliente.service';
import { Cliente } from '../../cliente/cliente';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-post',
  templateUrl: './inserir-post.component.html',
  styleUrls: ['./inserir-post.component.css']
})
export class InserirPostComponent implements OnInit, OnDestroy {

  form: FormGroup;
  myFilter: any;
  minDate = moment().format();
  campanhas: Campanha[];
  clientes: Cliente[];
  disableCampanha: Boolean = true;
  sub: any;
  arquivoSelecionado: File = null;

  constructor(
    private fb: FormBuilder,
    private campanhaService: CampanhaService,
    private postService: PostService,
    clienteService: ClienteService,
    private router: Router
  ) {
    this.myFilter = (d: Date): boolean => {
      const day = d.getDay();
      // Prevent Saturday and Sunday from being selected.
      return day !== 0 && day !== 6;
    };
    this.sub = clienteService.getClientes().subscribe(cliente => this.clientes = cliente);
   }

  ngOnInit() {
    this.form = this.fb.group({
      nome_post: [null, Validators.required],
      text: [null, [Validators.required]],
      prazo: [null, [Validators.required]],
      url: [null, [Validators.required]],
      usuario: this.fb.group({
        id: [null],
        name: [null],
        email: [null],
        access: [null]
      }),
      campanha: this.fb.group({
        id: [null, [Validators.required]],
        nome_campanha: [null],
        comeco_campanha: [null],
        final_campanha: [null],
        cliente: this.fb.group({
          id: [null, Validators.required],
          nome_cliente: [null]
        }),
      }),
      // usuario: [null, [Validators.required]],
      // campanha: [null, [Validators.required]],
    });
    this.form.patchValue( {usuario : JSON.parse(atob(localStorage.getItem('user')))});
  }

  exibeNome(campanha?: Campanha): string | undefined {
    return campanha ? campanha.nome_campanha : undefined;
  }

  mostraCampanhas(event) {
    this.sub = this.campanhaService.getCampanhasByCliente(event.value).subscribe( campanhas => this.campanhas = campanhas);
    return this.disableCampanha = false;
  }
  updateFormCampanha(event, campanha) {
    this.form.patchValue({campanha: campanha});
  }

  imagemSelecionada(event) {
    this.arquivoSelecionado = event;
    this.form.patchValue({url: event});
  }

  onSubmit () {
    if (!this.form.valid) {
      swal({
        position: 'top-end',
        type: 'error',
        title: 'Oops...',
        text: 'Algo deu errado tente novamente.',

      });
    } else {
      this.sub = this.postService.cadastraPost(this.form.value, this.arquivoSelecionado).subscribe( (res: Post) => {
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Bom trabalho!',
            text: 'Post cadastrado com sucess ;)',
            onAfterClose: () => this.router.navigate(['/posts'])
          });
      });
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
