import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register.component';

export const registerRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
];

export const registerRouting = RouterModule.forChild(registerRoutes);
