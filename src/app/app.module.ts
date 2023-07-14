import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignComponent } from './sign/sign.component';
// import { NgMathPipesModule } from 'angular-pipes'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    // NgMathPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
