import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent/parent.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AcademicComponent } from './academic/academic.component';
import { ProfessionalComponent } from './professional/professional.component';

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
    MatGridListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
