import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table'; 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import {ApiService} from "./services/api.service";
// import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatTableModule,
  ],
  providers: [],
  // providers: [ApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }