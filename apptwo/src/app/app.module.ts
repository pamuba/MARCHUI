import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { DepartmentDetailComponent } from './department-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    routingComponents,
    PageNotFoundComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
