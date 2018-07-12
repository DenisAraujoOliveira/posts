import { CampanhaComponent } from './campanha.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const campanhaRoutes: Routes = [
    {
        path: '',
        component: CampanhaComponent,
        // children: [

      // ]
    },
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
