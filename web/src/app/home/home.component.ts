import { Subscription } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../login/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inscricao: Subscription;

  constructor(private auth: AuthService, private  http: HttpClient) { }

  ngOnInit() {
    this.inscricao = this.http.get<any>(environment.apiUrl + 'auth/user').subscribe( data => {
      // console.log(data);
    });
  }

  logout() {
    this.auth.logout();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
