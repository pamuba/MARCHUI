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
import { PipesComponent } from './pipes.component';
import { ChildComponent } from './child/child.component';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { HeroParentComponent } from './hero-parent.component';
import { HeroChildComponent } from './hero-child.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PropertyBindingComponent,
    ClassBindingComponent,
    SyleBindingComponent,
    TwoWayComponent,
    StructuralComponent,
    PipesComponent,
    ChildComponent,
    NameChildComponent,
    NameParentComponent,
    HeroParentComponent,
    HeroChildComponent,
    VersionChildComponent,
    VersionParentComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
