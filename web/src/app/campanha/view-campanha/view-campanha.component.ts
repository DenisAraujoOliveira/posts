import { CampanhaService } from './../campanha.service';
import { Cliente } from './../../cliente/cliente';
import { Campanha } from './../campanha';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-campanha',
  templateUrl: './view-campanha.component.html',
  styleUrls: ['./view-campanha.component.css']
})
export class ViewCampanhaComponent implements OnInit {

  @Input() campanha: Campanha;
  @Input() cliente: Cliente;


  constructor() { }

  ngOnInit() {
  }

}
