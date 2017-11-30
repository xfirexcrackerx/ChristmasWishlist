import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GiftsListsComponent} from './components/gifts-lists/gifts-lists.component';
import {addGiftListRoutes} from './moduls/add-gifts-list/add-gifts-list.routes';
import {GiftsListsRootComponent} from './gifts-lists-root.component';

export const giftListRoutes: Routes = [
  {
    path: '',
    component: GiftsListsRootComponent,
    children: [
      {
        path: '',
        redirectTo: 'lists',
        pathMatch: 'full'
      },
      {
        path: 'lists',
        component: GiftsListsComponent
      },
      {
        path: 'add-gifts-list',
        children: [...addGiftListRoutes]
      }
    ]
  }
];

export const giftListRouting = RouterModule.forChild(giftListRoutes);
