import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {PublicModule} from './public/public.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { HubService } from 'ngx-signalr-hubservice';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CookieService, HubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
