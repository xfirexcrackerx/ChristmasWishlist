import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {loginRoutes} from './components/login/login.routes';
import {addListRoutes} from './components/addList/addList.routes';
import {giftListRoutes} from './components/gifts-lists/gifts-lists.routes';
import {forumRoutes} from './components/forum/forum.routes';
import {userProfileRoutes} from './components/user-profile/user-profile.routes';
import {registerRoutes} from './components/register/register.routes';

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
      },
      {
        path: 'forum',
        children: [...forumRoutes]
      },
      {
        path: 'user-profile',
        children: [...userProfileRoutes]
      },
      {
        path: 'register',
        children: [...registerRoutes]
      }
    ]
  }
];

export const publicRouting = RouterModule.forChild(publicRoutes);
