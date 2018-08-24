import { Component, OnInit,  Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  post: Post;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Post,
    private postservice: PostService
  ) {
    this.post = data;
  }


  ngOnInit() {
    console.log(this.post);
  }

  aprovar() {
    this.postservice.aprovar(this.post).subscribe((res: Post) => this.post = res);
  }
  reprovar() {
    this.postservice.reprovar(this.post).subscribe((res: Post) => this.post = res);
  }

}
