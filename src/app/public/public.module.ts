import { NgModule } from '@angular/core';
import {LayoutModule} from './layout/layout.module';
import {publicRouting} from './public.routes';
import {LoginModule} from './components/login/login.module';
import { AddListModule } from './components/addList/addList.module';
import {GiftsListModule} from './components/gifts-lists/gifts-lists.module';

@NgModule({
  imports: [
    LayoutModule,
    publicRouting,
    LoginModule,
    AddListModule,
    GiftsListModule
  ],
  declarations: []
})
export class PublicModule {
}
