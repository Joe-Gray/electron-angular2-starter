import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { MenubarModule }                      from 'primeng/primeng';

import { AppComponent }             from './app.component';
import { AppRoutingModule }         from './routing/app-routing.module';
import { HttpService }              from './core/http.service';

import { HomeComponent }            from './home/home.component';
import { TestComponent }            from './test/test.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, AppRoutingModule, MenubarModule ],
  declarations: [ AppComponent, HomeComponent, TestComponent ],
  providers:    [ HttpService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
