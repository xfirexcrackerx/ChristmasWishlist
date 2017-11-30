import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {publicRoutes} from './public/public.routes';


export const appRoutes: Routes = [
  {
    path: '',
    children: [...publicRoutes]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
