import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirPostComponent } from './inserir-post/inserir-post.component';
import { PostRoutingModule } from './post.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE, MatAutocompleteModule, MatSortModule, MatDialogModule, } from '@angular/material';
import { MatRadioModule  } from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import { ListPostsComponent } from './list-posts/list-posts.component';
import {MatTableModule} from '@angular/material/table';
import { ViewPostComponent } from './view-post/view-post.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    PostRoutingModule,
    MatIconModule
  ],

  declarations: [InserirPostComponent, ListPostsComponent, ViewPostComponent],
  entryComponents: [ViewPostComponent],
  exports: [ListPostsComponent],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-GB'},
  ]
})
export class PostModule { }
