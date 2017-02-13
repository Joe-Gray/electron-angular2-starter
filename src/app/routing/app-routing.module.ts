import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { HomeComponent }          from '../home/home.component';
import { TestComponent }          from '../test/test.component';
import { LocationComponent }      from '../location/location.component';
import { AccountComponent }       from '../account/account.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'location', component: LocationComponent },
  { path: 'test', component: TestComponent },
  { path: 'account', component: AccountComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

