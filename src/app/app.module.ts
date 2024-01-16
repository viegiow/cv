import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent/parent.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AcademicComponent } from './academic/academic.component';
import { ProfessionalComponent } from './professional/professional.component';
import { AppRoutingModule } from './app-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    AboutMeComponent,
    AcademicComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
