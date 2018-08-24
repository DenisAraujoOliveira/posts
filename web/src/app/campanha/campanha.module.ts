import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ViewCampanhaComponent } from './view-campanha/view-campanha.component';
import { ClienteModule } from './../cliente/cliente.module';
import { CampanhaRoutingModule } from './campanha.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCampanhasInputComponent } from './lista-campanhas-input/lista-campanhas-input.component';
// tslint:disable-next-line:max-line-length
import { MatProgressSpinnerModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MAT_DATE_LOCALE, MatInputModule } from '@angular/material';
import { InserirCampanhaComponent } from './inserir-campanha/inserir-campanha.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    CampanhaRoutingModule,
    ClienteModule,

  ],
  declarations: [ViewCampanhaComponent, ListaCampanhasInputComponent, InserirCampanhaComponent],
  exports: [ViewCampanhaComponent, ListaCampanhasInputComponent],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-GB'},
  ]
})
export class CampanhaModule { }
