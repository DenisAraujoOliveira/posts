import { CampanhaService } from './../campanha.service';
import { Campanha } from './../campanha';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lista-campanhas-input',
  templateUrl: './lista-campanhas-input.component.html',
  styleUrls: ['./lista-campanhas-input.component.css']
})
export class ListaCampanhasInputComponent implements OnInit, OnDestroy {

  campanhas: Campanha[];
  // tslint:disable-next-line:no-inferrable-types
  spinner: boolean = true;

  private sub: any;

  constructor(service: CampanhaService) {
    this.sub = service.getCampanhas().subscribe( campanha => {
      this.campanhas = campanha;
      this.spinner = false;
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
