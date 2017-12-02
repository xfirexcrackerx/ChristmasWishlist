import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForumComponent } from './components/forum.component';

export const forumRoutes: Routes = [
  {
    path: '',
    component: ForumComponent
  }
];

export const forumRouting = RouterModule.forChild(forumRoutes);
