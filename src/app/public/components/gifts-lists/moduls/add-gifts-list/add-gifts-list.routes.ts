import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddListComponent } from './components/add-gifts-list/addList.component';

export const addGiftListRoutes: Routes = [
  {
    path: '',
    component: AddListComponent
  }
];

export const addGiftListRouting = RouterModule.forChild(addGiftListRoutes);
