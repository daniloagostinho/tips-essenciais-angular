import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';

import { DataServiceService } from './services/data-service.service';

import { AppComponent } from './app.component';

import { ElvisOperatorModule } from './elvis-operator/elvis-operator.module';
//import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { SubjectsModule } from './subjects/subjects.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ElvisOperatorModule,
    //HomeModule,
    AboutModule,
    SubjectsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
