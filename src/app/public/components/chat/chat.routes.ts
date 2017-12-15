import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat.component';

export const chatRoutes: Routes = [
  {
    path: '',
    component: ChatComponent
  }
];

export const chatRouting = RouterModule.forChild(chatRoutes);
