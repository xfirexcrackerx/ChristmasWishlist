import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {loginRoutes} from './components/login/login.routes';
import {addListRoutes} from './components/addList/addList.routes';
import {giftListRoutes} from './components/gifts-lists/gifts-lists.routes';

export const publicRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        children: [...loginRoutes]
      },
      {
        path: 'add-list',
        children: [...addListRoutes]
      },
      {
        path: 'gifts-lists',
        children: [...giftListRoutes]
      }
    ]
  }
];

export const publicRouting = RouterModule.forChild(publicRoutes);
