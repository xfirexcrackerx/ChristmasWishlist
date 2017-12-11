import { NgModule } from '@angular/core';
import {LayoutModule} from './layout/layout.module';
import {publicRouting} from './public.routes';
import {LoginModule} from './components/login/login.module';
import {GiftsListModule} from './components/gifts-lists/gifts-lists.module';
import {ForumModule} from './components/forum/forum.module';
import {UserProfileModule} from './components/user-profile/user-profile.module';
import {RegisterModule} from './components/register/register.module';
import {HomeModule} from './components/home/home.module';

@NgModule({
  imports: [
    LayoutModule,
    publicRouting,
    LoginModule,
    GiftsListModule,
    ForumModule,
    UserProfileModule,
    RegisterModule,
    HomeModule
  ],
  declarations: []
})
export class PublicModule {
}
