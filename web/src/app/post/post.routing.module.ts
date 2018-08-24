import { InserirPostComponent } from './inserir-post/inserir-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { ViewPostComponent } from './view-post/view-post.component';

const postRoutes: Routes = [
    {
        path: '',
        component: ListPostsComponent,
      },
      {
        path: 'inserir',
        component: InserirPostComponent,
      },
      {
        path: ':id',
        component: ViewPostComponent,
      },
];

@NgModule({
  imports: [
    RouterModule.forChild(postRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class  PostRoutingModule {

}
