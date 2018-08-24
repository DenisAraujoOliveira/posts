import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCampanhasInputComponent } from './lista-campanhas-input/lista-campanhas-input.component';
import { InserirCampanhaComponent } from './inserir-campanha/inserir-campanha.component';

const campanhaRoutes: Routes = [
    {
        path: '',
        component: ListaCampanhasInputComponent,
    },
    {
      path: 'inserir',
      component: InserirCampanhaComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(campanhaRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CampanhaRoutingModule {

}
