import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddListComponent } from './components/addList.component';

export const addListRoutes: Routes = [
  {
    path: '',
    component: AddListComponent
  }
];

export const addListRouting = RouterModule.forChild(addListRoutes);
