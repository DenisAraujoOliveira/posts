import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { MatSort, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ViewCampanhaComponent } from '../../campanha/view-campanha/view-campanha.component';
import { ViewPostComponent } from '../view-post/view-post.component';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;

  posts: Post[];
  dataPost;
  displayedColumns: string[] = ['nome_post', 'prazo', 'status'];
  sub: any;
  // tslint:disable-next-line:no-inferrable-types
  spinner: boolean = true;

  constructor(private postService: PostService, private router: Router, public dialog: MatDialog) {
  }


  ngOnInit() {
    this.sub = this.postService.allPosts().subscribe(res => {
      if (!res) {
        return;
      }
      this.posts = res;
      this.dataPost = new MatTableDataSource(this.posts);
      this.dataPost.sort = this.sort;
      this.spinner = false;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  selectRow(row: Post) {
    // this.router.navigate(['/post', row.id], );
    // console.log(row);
    const dialogRef = this.dialog.open(ViewPostComponent, {
      data: row,
      width: '75%',
    });

    this.sub = dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });

  }

}
