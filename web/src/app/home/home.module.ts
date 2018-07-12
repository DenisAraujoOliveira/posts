import { ClienteModule } from './../cliente/cliente.module';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { GpComponent } from './gp/gp.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { CriacaoComponent } from './criacao/criacao.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    ClienteModule
  ],
  declarations: [HomeComponent, GpComponent, CriacaoComponent, AtendimentoComponent],
  exports: [GpComponent, CriacaoComponent, AtendimentoComponent]
})
export class HomeModule { }
