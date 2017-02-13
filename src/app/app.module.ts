import { NgModule }                 from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { FormsModule }              from '@angular/forms';
import { HttpModule }               from '@angular/http';

import { MenubarModule }            from 'primeng/primeng';
import { GrowlModule }              from 'primeng/primeng';
import { FileUploadModule }         from 'primeng/primeng';
import { DataListModule }           from 'primeng/primeng';

import {NgbModule, NgbActiveModal}  from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }             from './app.component';
import { AppRoutingModule }         from './routing/app-routing.module';
import { HttpService }              from './core/http.service';
import { LocationService }          from './location/location.service';

import { HomeComponent }            from './home/home.component';
import { TestComponent }            from './test/test.component';
import { LocationComponent }        from './location/location.component';
import { LocationInputFormComponent }        from './location/input-form/location-input-form.component';

import { AccountComponent }        from './account/account.component';
import { LoginComponent }          from './account/login/login.component';
import { LogoutComponent }         from './account/logout/logout.component';

@NgModule({
  imports:          [ BrowserModule, FormsModule, HttpModule, AppRoutingModule, NgbModule.forRoot(), MenubarModule, GrowlModule, FileUploadModule, DataListModule ],
  declarations:     [ AppComponent, HomeComponent, LocationComponent, LocationInputFormComponent, TestComponent,
                      AccountComponent, LoginComponent, LogoutComponent ],
  providers:        [ HttpService, LocationService, NgbActiveModal ],
  entryComponents:  [ LocationInputFormComponent ],
  bootstrap:        [ AppComponent ]
})
export class AppModule { }
