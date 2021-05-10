import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FirstComponent } from './first/first.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { SyleBindingComponent } from './syle-binding/syle-binding.component';
import { TwoWayComponent } from './two-way/two-way.component'
import { FormsModule } from '@angular/forms';
import { StructuralComponent } from './structural/structural.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    SyleBindingComponent,
    TwoWayComponent,
    StructuralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
