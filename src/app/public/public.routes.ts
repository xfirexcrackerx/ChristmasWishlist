import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import {loginRoutes} from './components/login/login.routes';
import {giftListRoutes} from './components/gifts-lists/gifts-lists.routes';
import {chatRoutes} from './components/chat/chat.routes';
import {userProfileRoutes} from './components/user-profile/user-profile.routes';
import {registerRoutes} from './components/register/register.routes';
import {homeRoutes} from './components/home/home.routes';

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
        path: 'gifts-lists',
        children: [...giftListRoutes]
      },
      {
        path: 'chat',
        children: [...chatRoutes]
      },
      {
        path: 'user-profile',
        children: [...userProfileRoutes]
      },
      {
        path: 'register',
        children: [...registerRoutes]
      },
      {
        path: 'home',
        children: [...homeRoutes]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

export const publicRouting = RouterModule.forChild(publicRoutes);
