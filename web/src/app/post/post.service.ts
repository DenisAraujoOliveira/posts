import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import swal from 'sweetalert2';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
  }


  cadastraPost(post: Post, file: File) {
    const fd = new FormData();
    fd.append('url', file );
    fd.append('nome_post', post.nome_post );
    fd.append('text', post.text );
    fd.append('prazo', '' + post.prazo );
    fd.append('campanha_id', '' + post.campanha.id );
    fd.append('usuario_criador_id', '' + post.usuario.id );
    return this.http.post( environment.apiUrl + 'post', fd)
    .pipe(
      catchError(err => of('Erro ao inserir Post'))
    );
  }

  allPosts() {
    return this.http.get<Post[]>( environment.apiUrl + 'posts' );
  }

  aprovar(post: Post ) {
    return this.http.put(environment.apiUrl + 'post/aprovar/' + post.id, post)
    .pipe(
      catchError(err => of('Erro ao reprovar Post'))
    );
  }

  reprovar(post: Post ) {
    return this.http.put(environment.apiUrl + 'post/reprovar/' + post.id, post)
    .pipe(
      catchError(err => of('Erro ao reprovar Post'))
    );
  }

}
