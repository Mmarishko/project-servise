import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {DataService} from "./data.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MyFirstIntInterceptor} from "./my-first-int.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [DataService, {
    provide: HTTP_INTERCEPTORS,
    useClass: MyFirstIntInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
