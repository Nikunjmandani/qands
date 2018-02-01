import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ConComponent } from './con/con.component';
//import { AbcdComponent } from './abcd/abcd.component';
//import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard2', component: Dashboard2Component },
  { path: 'dashboard3', component: Dashboard3Component },
 // { path: 'con', component: ConComponent },
 // { path: 'abcd', component: AbcdComponent },
  //{ path: 'home', component: HomeComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);