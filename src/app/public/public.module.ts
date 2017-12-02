import { NgModule } from '@angular/core';
import {LayoutModule} from './layout/layout.module';
import {publicRouting} from './public.routes';
import {LoginModule} from './components/login/login.module';
import { AddListModule } from './components/addList/addList.module';
import {GiftsListModule} from './components/gifts-lists/gifts-lists.module';
import {ForumModule} from './components/forum/forum.module';
import {UserProfileModule} from './components/user-profile/user-profile.module';
import {RegisterModule} from './components/register/register.module';

@NgModule({
  imports: [
    LayoutModule,
    publicRouting,
    LoginModule,
    AddListModule,
    GiftsListModule,
    ForumModule,
    UserProfileModule,
    RegisterModule
  ],
  declarations: []
})
export class PublicModule {
}
