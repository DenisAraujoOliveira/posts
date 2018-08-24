import { TypeUserGuard } from './../shared/guards/type-user.service';
import { AtendimentoComponent } from './atendimento/atendimento.component';
import { CriacaoComponent } from './criacao/criacao.component';
import { GpComponent } from './gp/gp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const homeRoutes: Routes = [
    {
        path: '',
        children: [
          {
            path: 'gp',
            component: GpComponent,
          },
          {
            path: 'criacao',
            component: CriacaoComponent,
          },
          {
            path: 'atendimento',
            component: AtendimentoComponent,
          }

      ]
    },
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {

}
