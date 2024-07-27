import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { SecondComponent } from './second/second.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
