import { CampanhaRoutingModule } from './campanha.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampanhaComponent } from './campanha.component';

@NgModule({
  imports: [
    CommonModule,
    CampanhaRoutingModule
  ],
  declarations: [CampanhaComponent]
})
export class CampanhaModule { }
