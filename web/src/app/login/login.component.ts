import { Auth } from './auth';
import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  inscricao: Subscription;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    this.inscricao = this.authService.login(this.form.value).subscribe(
      (response: Auth) => {
        // this.router.navigate(['/home', response.user.access]);
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {console.log(error); }
    );
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
