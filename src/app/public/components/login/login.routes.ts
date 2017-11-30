import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login.component';

export const loginRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

export const loginRouting = RouterModule.forChild(loginRoutes);
