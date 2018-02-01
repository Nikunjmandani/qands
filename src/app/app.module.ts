import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { ConComponent } from './con/con.component';
//import { AbcdComponent } from './abcd/abcd.component';
import { routing } from './app.routing';
//import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import {QandsService } from './services/index';
@NgModule({
  declarations: [
    AppComponent,
   // ConComponent,
   // AbcdComponent,
   // HomeComponent,
    DashboardComponent,
    LoginComponent,
    Dashboard2Component,
    Dashboard3Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
     ReactiveFormsModule
  ],
  providers: [QandsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
