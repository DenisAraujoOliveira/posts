import { MenuModule } from './menu/menu/menu.module';
import { AppErrorHandler } from './app-error-handler';
import { LoginModule } from './login/login.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RefreshTokenInterceptor } from './shared/interceptors/refresh-token-interceptor';
import { TokenInterceptor } from './shared/interceptors/token-interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LoginModule,
    MenuModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true},
    {provide: ErrorHandler, useClass: AppErrorHandler},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
