import { TypeUserGuard } from './shared/guards/type-user.service';
import { AuthGuard } from './shared/guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
    canActivate: [AuthGuard],
    canLoad: [
      TypeUserGuard
    ]
  },
  {
    path: 'campanha',
    loadChildren: './campanha/campanha.module#CampanhaModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'post',
    loadChildren: './post/post.module#PostModule',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];




@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
