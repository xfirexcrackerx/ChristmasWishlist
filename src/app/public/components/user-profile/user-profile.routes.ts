import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './components/user-profile.component';

export const userProfileRoutes: Routes = [
  {
    path: '',
    component: UserProfileComponent
  }
];

export const userProfileRouting = RouterModule.forChild(userProfileRoutes);
