import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLib1Module } from 'my-lib1';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLib1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
