import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ListEmployee } from './list-employee/list-employee';
import {UpdateEmployee } from './update-employee/update-employee';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateEmployee } from './create-employee/create-employee';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    App,
    ListEmployee,
    CreateEmployee,
    UpdateEmployee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
  ],
  bootstrap: [App]
})
export class AppModule { }
